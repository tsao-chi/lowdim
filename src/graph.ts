export type Id = number

export class Vertex {
  id: Id

  constructor(id: Id) {
    this.id = id
  }
}

export class Edge {
  id: Id
  start: Vertex
  end: Vertex

  constructor(id: Id, start: Vertex, end: Vertex) {
    this.id = id
    this.start = start
    this.end = end
  }
}

export class Graph {
  vertexes: Array<Vertex>
  edges: Array<Edge>

  constructor() {
    this.vertexes = new Array()
    this.edges = new Array()
  }


}
