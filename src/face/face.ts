import { Cell, Id, cell_eq } from "@/cell"
import { Complex } from "@/complex"
import { Spheric } from "@/spheric"
import { Edge } from "@/edge"

export class Face implements Cell {
  id: Id
  complex: Complex
  polygon: Polygon

  constructor(the: { id: Id; polygon: Polygon }) {
    this.id = the.id
    this.complex = the.polygon.complex
    this.polygon = the.polygon
  }

  get boundary(): Polygon {
    return this.polygon
  }

  repr(): string {
    const polygon = this.boundary
    const edge_repr = (edge: Edge) => `${edge.sign === -1 ? "-" : ""}${edge.id}`
    return `${this.id}: [${polygon.circuit.map(edge_repr).join(", ")}]`
  }
}

export class Polygon implements Spheric {
  complex: Complex
  circuit: Array<Edge>

  constructor(circuit: Edge[]) {
    circuit_check(circuit)
    this.complex = circuit[0].complex
    this.circuit = circuit
  }

  segment(i: number): Edge {
    return this.circuit[i]
  }
}

function circuit_check(circuit: Edge[]): void {
  if (circuit.length === 0)
    throw new Error("Circuit should at least have one edge.")

  Complex.same(circuit.map((edge) => edge.complex))

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
