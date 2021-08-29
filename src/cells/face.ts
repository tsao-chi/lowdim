import { Cell, Id } from "../cell"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Face extends Cell {
  id: Id
  boundary: Sphericals.Polygon

  constructor(id: Id, boundary: Sphericals.Polygon) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const edge_repr = (edge: Cells.Edge) =>
      `${edge.sign === -1 ? "-" : ""}${edge.id}`
    return `${this.id}: [${this.boundary.circuit.map(edge_repr).join(", ")}]`
  }
}
