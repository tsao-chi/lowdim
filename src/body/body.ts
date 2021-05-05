import { Cell, Id, cell_eq } from "../cell"
import { Complex } from "../complex"
import { Spheric } from "../spheric"
import { Edge } from "../edge"
import { Face } from "../face"

export class Body implements Cell {
  id: Id
  complex: Complex
  polyhedron: Polyhedron

  constructor(the: { id: Id; polyhedron: Polyhedron }) {
    this.id = the.id
    this.complex = the.polyhedron.complex
    this.polyhedron = the.polyhedron
  }

  get boundary(): Polyhedron {
    return this.polyhedron
  }

  repr(): string {
    const polyhedron = this.boundary
    const joint_repr = (joint: Joint) => {
      let s = "  "
      s += `(${joint.left_face.id}) -> ${joint.left_side}`
      s += ` * `
      s += `${joint.right_side} <- (${joint.right_face.id})`
      return s
    }
    return `${this.id}: {\n${polyhedron.joints.map(joint_repr).join("\n")}\n}`
  }
}

export class Joint {
  complex: Complex
  left_face: Face
  left_side: number
  right_side: number
  right_face: Face

  constructor(
    left_face: Face,
    left_side: number,
    right_side: number,
    right_face: Face
  ) {
    Complex.same([left_face.complex, right_face.complex])
    this.complex = left_face.complex
    this.left_face = left_face
    this.left_side = left_side
    this.right_face = right_face
    this.right_side = right_side
  }

  get left_segment(): Edge {
    return this.left_face.polygon.segment(this.left_side)
  }

  get right_segment(): Edge {
    return this.right_face.polygon.segment(this.right_side)
  }
}

export class Polyhedron implements Spheric {
  complex: Complex
  joints: Array<Joint>

  constructor(pairs: Array<[Face, number, number, Face]>) {
    const joints = pairs.map((pair) => new Joint(...pair))
    Complex.same(joints.map((joint) => joint.complex))
    joints_check(joints)
    this.complex = pairs[0][0].complex
    this.joints = joints
  }
}

function joints_check(joints: Array<Joint>): void {
  if (joints.length === 0)
    throw new Error("To build a polyhedron, joints can not be empty.")

  for (const joint of joints) {
    if (!cell_eq(joint.left_segment, joint.right_segment)) {
      throw new Error("In a joint paired sides should be the same edge.")
    }
  }

  // NOTE record from face to occured sides
  const record: Map<
    number,
    {
      face: Face
      sides: Array<number>
    }
  > = new Map()

  for (const joint of joints) {
    {
      const value = record.get(joint.left_face.id)
      if (value) value.sides.push(joint.left_side)
      else
        record.set(joint.left_face.id, {
          face: joint.left_face,
          sides: [joint.left_side],
        })
    }

    {
      const value = record.get(joint.right_face.id)
      if (value) value.sides.push(joint.right_side)
      else
        record.set(joint.right_face.id, {
          face: joint.right_face,
          sides: [joint.right_side],
        })
    }
  }

  // NOTE every side of every face must be used once.
  for (const { face, sides } of record.values()) {
    if (face.polygon.circuit.length !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once."
      )
    }

    if (new Set(sides).size !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once.\n" +
          "But duplication occured.\n"
      )
    }
  }
}
