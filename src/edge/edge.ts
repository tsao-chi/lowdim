import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Vertex } from "@/vertex"

export class Edge implements Cell {
  id: Id
  complex: Complex
  start: Vertex
  end: Vertex

  constructor(the: { id: Id; start: Vertex; end: Vertex }) {
    Complex.same([the.start.complex, the.end.complex])

    this.id = the.id
    this.complex = the.start.complex
    this.start = the.start
    this.end = the.end
  }

  repr(): string {
    const { start, end } = this.boundary
    return `${this.id}: ${start.repr()} -> ${end.repr()}`
  }

  get boundary(): Endpoints {
    return new Endpoints({ ...this })
  }

  get inverse(): InverseEdge {
    return new InverseEdge({ ...this })
  }
}

export class InverseEdge extends Edge {
  get boundary(): Endpoints {
    return new Endpoints({
      start: this.end,
      end: this.start,
    })
  }
}

export class Endpoints {
  complex: Complex
  start: Vertex
  end: Vertex

  constructor(the: { start: Vertex; end: Vertex }) {
    Complex.same([the.start.complex, the.end.complex])

    this.complex = the.start.complex
    this.start = the.start
    this.end = the.end
  }
}
