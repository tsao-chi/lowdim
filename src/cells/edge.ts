import { Cell, Id } from "../cell"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Edge extends Cell {
  id: Id
  boundary: Sphericals.Endpoints

  constructor(id: Id, boundary: Sphericals.Endpoints) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    const { start, end } = this.boundary
    return `${this.id}: ${start.repr()} -> ${end.repr()}`
  }

  get inverse(): InversedEdge {
    return new InversedEdge(this.id, this.boundary)
  }

  get sign(): -1 | 1 {
    return 1
  }
}

export class InversedEdge extends Edge {
  boundary: Sphericals.Endpoints = new Sphericals.Endpoints(
    this.boundary.end,
    this.boundary.start
  )

  get inverse(): InversedEdge {
    return new Edge(this.id, this.boundary)
  }

  get sign(): -1 | 1 {
    return -1
  }
}
