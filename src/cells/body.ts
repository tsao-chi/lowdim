import { Cell, Id } from "../cell"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Body extends Cell {
  id: Id
  boundary: Sphericals.Polyhedron

  constructor(id: Id, boundary: Sphericals.Polyhedron) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const joins_repr = this.boundary.joints
      .map((joint) => joint.repr())
      .join("\n")
    return `${this.id}: {\n${joins_repr}\n}`
  }
}
