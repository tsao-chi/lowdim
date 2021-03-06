import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Edge } from "@/edge"

export class Face implements Cell {
  id: Id
  complex: Complex
  circuit: Edge[]

  constructor(the: { id: Id; circuit: Edge[] }) {
    Polygon.circuit_check(the.circuit)

    this.id = the.id
    this.complex = the.circuit[0].complex
    this.circuit = the.circuit
  }
}

export class Polygon {
  complex: Complex
  circuit: Array<Edge>

  constructor(the: { circuit: Edge[] }) {
    Polygon.circuit_check(the.circuit)

    this.complex = the.circuit[0].complex
    this.circuit = the.circuit
  }

  static circuit_check(circuit: Edge[]): void {
    if (circuit.length === 0)
      throw new Error("Circuit should at least have one edge.")

    Complex.same(circuit.map((edge) => edge.complex))

    let head = circuit[0]
    const rest = circuit.slice(1)
    const last = circuit[circuit.length - 1]

    if (head.boundary.start !== last.boundary.end)
      throw new Error("Circuit is not closed.")

    for (const edge of rest) {
      if (head.boundary.end !== edge.boundary.start)
        throw new Error("Circuit is not closed.")

      head = edge
    }
  }
}
