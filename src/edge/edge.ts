import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Node } from "@/node"

export class Edge implements Cell {
  id: Id
  complex: Complex
  start: Node
  end: Node

  constructor(the: { id: Id; start: Node; end: Node }) {
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

  get sign(): -1 | 1 {
    return 1
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

  get inverse(): InverseEdge {
    return new Edge({ ...this })
  }

  get sign(): -1 | 1 {
    return -1
  }
}

export class Endpoints {
  complex: Complex
  start: Node
  end: Node

  constructor(the: { start: Node; end: Node }) {
    Complex.same([the.start.complex, the.end.complex])

    this.complex = the.start.complex
    this.start = the.start
    this.end = the.end
  }
}
