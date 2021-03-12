import { Cell, Id, cell_eq } from "@/cell"
import { Complex } from "@/complex"
import { Spheric } from "@/spheric"
import { Face } from "@/face"

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
    throw new Error("TODO")
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
}

export class Polyhedron implements Spheric {
  complex: Complex
  joints: Array<Joint>

  constructor(pairs: Array<[Face, number, number, Face]>) {
    const joints = pairs.map((pair) => new Joint(...pair))
    joints_check(joints)
    this.complex = pairs[0][0].complex
    this.joints = joints
  }
}

function joints_check(joints: Array<Joint>): void {
  if (joints.length === 0)
    throw new Error("To build a polyhedron, joints can not be empty.")
  // TODO check paired sides are the same edge.
  // TODO check every side of every face must be used.
}
