import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"
import { Node } from "../node"

export class Edge implements Cell {
  id: Id
  endpoints: Endpoints

  constructor(the: { id: Id; endpoints: Endpoints }) {
    this.id = the.id
    this.endpoints = the.endpoints
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
  start: Node
  end: Node

  constructor(start: Node, end: Node) {
    this.start = start
    this.end = end
  }
}
