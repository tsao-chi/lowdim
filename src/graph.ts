export type Id = number

export class Vertex {}

export class Edge {
  start: Id
  end: Id

  constructor(the: { start: Id; end: Id }) {
    this.start = the.start
    this.end = the.end
  }
}

export class Graph {
  vertexes: Map<Id, Vertex>
  edges: Map<Id, Edge>

  constructor(the: { vertexes: Map<Id, Vertex>; edges: Map<Id, Edge> }) {
    this.vertexes = the.vertexes
    this.edges = the.edges
  }
}
