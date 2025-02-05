import { Spherical } from "../spherical"
import * as Cells from "../cells"

export class Polygon extends Spherical {
  circuit: Array<Cells.Edge>

  constructor(circuit: Cells.Edge[]) {
    super()
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
