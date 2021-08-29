import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"
import * as Cells from "../cells"

export class Body extends Cell {
  id: Id
  boundary: Polyhedron

  constructor(id: Id, boundary: Polyhedron) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const joint_repr = (joint: Joint) => {
      let s = "  "
      s += `(${joint.left_face.id}) -> ${joint.left_side}`
      s += ` * `
      s += `${joint.right_side} <- (${joint.right_face.id})`
      return s
    }
    const joins_repr = this.boundary.joints.map(joint_repr).join("\n")
    return `${this.id}: {\n${joins_repr}\n}`
  }
}

export class Joint {
  left_face: Cells.Face
  left_side: number
  right_side: number
  right_face: Cells.Face

  constructor(
    left_face: Cells.Face,
    left_side: number,
    right_side: number,
    right_face: Cells.Face
  ) {
    this.left_face = left_face
    this.left_side = left_side
    this.right_face = right_face
    this.right_side = right_side
  }

  get left_segment(): Cells.Edge {
    return this.left_face.boundary.segment(this.left_side)
  }

  get right_segment(): Cells.Edge {
    return this.right_face.boundary.segment(this.right_side)
  }
}

export class Polyhedron extends Spheric {
  joints: Array<Joint>

  constructor(pairs: Array<[Cells.Face, number, number, Cells.Face]>) {
    super()
    const joints = pairs.map((pair) => new Joint(...pair))
    joints_check(joints)
    this.joints = joints
  }
}

function joints_check(joints: Array<Joint>): void {
  if (joints.length === 0)
    throw new Error("To build a polyhedron, joints can not be empty.")

  for (const joint of joints) {
    if (!joint.left_segment.eq(joint.right_segment)) {
      throw new Error("In a joint paired sides should be the same edge.")
    }
  }

  // NOTE record from face to occurred sides
  const record: Map<
    number,
    {
      face: Cells.Face
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
    if (face.boundary.circuit.length !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once."
      )
    }

    if (new Set(sides).size !== sides.length) {
      throw new Error(
        "In a polyhedron, every side of every face must be used once.\n" +
          "But duplication occurred.\n"
      )
    }
  }
}
