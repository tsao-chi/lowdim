import { Cell, Id, cell_eq } from "../cell"
import { Spheric } from "../spheric"
import { Edge } from "../edge"

export class Face implements Cell {
  id: Id
  boundary: Polygon

  constructor(id: Id, boundary: Polygon) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const edge_repr = (edge: Edge) => `${edge.sign === -1 ? "-" : ""}${edge.id}`
    return `${this.id}: [${this.boundary.circuit.map(edge_repr).join(", ")}]`
  }
}

export class Polygon implements Spheric {
  circuit: Array<Edge>

  constructor(circuit: Edge[]) {
    circuit_check(circuit)
    this.circuit = circuit
  }

  segment(i: number): Edge {
    return this.circuit[i]
  }
}

function circuit_check(circuit: Edge[]): void {
  if (circuit.length === 0)
    throw new Error("Circuit should at least have one edge.")

  let head = circuit[0]
  const rest = circuit.slice(1)
  const last = circuit[circuit.length - 1]

  if (!cell_eq(head.boundary.start, last.boundary.end))
    throw new Error("Circuit is not closed.")

  for (const edge of rest) {
    if (!cell_eq(head.boundary.end, edge.boundary.start))
      throw new Error("Circuit is not closed.")

    head = edge
  }
}
