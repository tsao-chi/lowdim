import { Cell, Id } from "@/cell"

export class Vertex implements Cell {
  id: Id

  constructor(the: { id: Id }) {
    this.id = the.id
  }
}

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

export class Graph {
  vertexes: Array<Vertex>
  edges: Array<Edge>

  constructor() {
    this.vertexes = new Array()
    this.edges = new Array()
  }

  vertex(id: Id): Vertex {
    return this.vertexes[id]
  }

  new_vertex(): Vertex {
    const id = this.vertexes.length
    const vertex = new Vertex({ id })
    this.vertexes.push(vertex)
    return vertex
  }

  edge(id: Id): Edge {
    return this.edges[id]
  }

  new_edge(endpoints: Endpoints): Edge {

    const id = this.vertexes.length
    const edge = new Edge({ id, ...endpoints })
    this.edges.push(edge)
    return edge
  }
}
