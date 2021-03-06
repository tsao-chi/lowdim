import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Vertex } from "@/vertex"

export class Edge implements Cell {
  id: Id
  complex: Complex

  start: Vertex
  end: Vertex

  constructor(the: { id: Id; complex: Complex; start: Vertex; end: Vertex }) {
    Complex.same([the.start.complex, the.end.complex])

    this.id = the.id
    this.complex = the.complex
    this.start = the.start
    this.end = the.end
  }

  boundary(): Endpoints {
    return new Endpoints({ ...this })
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
