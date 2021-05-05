import { Cell, Id } from "../cell"
import { Complex } from "../complex"
import { Spheric } from "../spheric"
import { Node } from "../node"

export class Edge implements Cell {
  id: Id
  complex: Complex
  endpoints: Endpoints

  constructor(the: { id: Id; endpoints: Endpoints }) {
    this.id = the.id
    this.endpoints = the.endpoints
    this.complex = the.endpoints.complex
  }

  repr(): string {
    const { start, end } = this.boundary
    return `${this.id}: ${start.repr()} -> ${end.repr()}`
  }

  get boundary(): Endpoints {
    return this.endpoints
  }

  get inverse(): InverseEdge {
    return new InverseEdge({ ...this })
  }

  get inv(): InverseEdge {
    return this.inverse
  }

  get sign(): -1 | 1 {
    return 1
  }
}

export class InverseEdge extends Edge {
  endpoints: Endpoints = new Endpoints(this.endpoints.end, this.endpoints.start)

  get inverse(): InverseEdge {
    return new Edge({ ...this })
  }

  get sign(): -1 | 1 {
    return -1
  }
}

export class Endpoints implements Spheric {
  complex: Complex
  start: Node
  end: Node

  constructor(start: Node, end: Node) {
    Complex.same([start.complex, end.complex])
    this.complex = start.complex
    this.start = start
    this.end = end
  }
}
