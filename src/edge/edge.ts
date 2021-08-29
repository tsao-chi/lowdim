import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"
import { Node } from "../node"

export class Edge implements Cell {
  id: Id
  boundary: Endpoints

  constructor(id: Id, boundary: Endpoints) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const { start, end } = this.boundary
    return `${this.id}: ${start.repr()} -> ${end.repr()}`
  }

  get inverse(): InverseEdge {
    return new InverseEdge(this.id, this.boundary)
  }

  get inv(): InverseEdge {
    return this.inverse
  }

  get sign(): -1 | 1 {
    return 1
  }
}

export class InverseEdge extends Edge {
  boundary: Endpoints = new Endpoints(this.boundary.end, this.boundary.start)

  get inverse(): InverseEdge {
    return new Edge(this.id, this.boundary)
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
