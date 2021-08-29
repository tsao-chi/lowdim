import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"
import * as Cells from "../cells"

export class Face extends Cell {
  id: Id
  boundary: Polygon

  constructor(id: Id, boundary: Polygon) {
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

export class Polygon implements Spheric {
  circuit: Array<Cells.Edge>

  constructor(circuit: Cells.Edge[]) {
    circuit_check(circuit)
    this.circuit = circuit
  }

  segment(i: number): Cells.Edge {
    return this.circuit[i]
  }
}

function circuit_check(circuit: Cells.Edge[]): void {
  if (circuit.length === 0)
    throw new Error("Circuit should at least have one edge.")

  let head = circuit[0]
  const rest = circuit.slice(1)
  const last = circuit[circuit.length - 1]

  if (!head.boundary.start.eq(last.boundary.end))
    throw new Error("Circuit is not closed.")

  for (const edge of rest) {
    if (!head.boundary.end.eq(edge.boundary.start))
      throw new Error("Circuit is not closed.")

    head = edge
  }
}
