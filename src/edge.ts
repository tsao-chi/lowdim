import { Cell, Id } from "@/cell"
import { Vertex } from "@/vertex"

export class Edge implements Cell {
  id: Id
  start: Vertex
  end: Vertex

  constructor(the: { id: Id; start: Vertex; end: Vertex }) {
    this.id = the.id
    this.start = the.start
    this.end = the.end
  }
}


export class Endpoints {
  start: Vertex
  end: Vertex

  constructor(the: { start: Vertex; end: Vertex }) {
    this.start = the.start
    this.end = the.end
  }
}
