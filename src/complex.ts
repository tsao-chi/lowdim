import { Cell, Id } from "@/cell"
import { Vertex } from "@/vertex"
import { Edge, Endpoints } from "@/edge"

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
