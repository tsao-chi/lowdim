import { Cell, Id } from "@/cell"
import { Vertex } from "@/vertex"
import { Edge, Endpoints } from "@/edge"

export class Complex {
  vertexes: Vertex[]
  edges: Edge[]

  constructor() {
    this.vertexes = []
    this.edges = []
  }

  static same([complex, ...complexes]: [Complex, ...Complex[]]): void {
    if (complexes.some((other) => complex !== other)) {
      throw new Error("Expecting complexes to be the same.")
    }
  }

  vertex(id: Id): Vertex {
    const vertex = this.vertexes[id]
    if (vertex === undefined) throw new Error(`unknown vertex id: ${id}`)
    return vertex
  }

  new_vertex(): Vertex {
    const id = this.vertexes.length
    const vertex = new Vertex({ id, complex: this })
    this.vertexes.push(vertex)
    return vertex
  }

  edge(id: Id): Edge {
    const edge = this.edges[id]
    if (edge === undefined) throw new Error(`unknown edge id: ${id}`)
    return edge
  }

  endpoints(start: Id, end: Id): Endpoints {
    return new Endpoints({
      start: this.vertex(start),
      end: this.vertex(end),
    })
  }

  new_edge(endpoints: Endpoints): Edge {
    Complex.same([this, endpoints.complex])

    const id = this.vertexes.length
    const edge = new Edge({ id, ...endpoints })
    this.edges.push(edge)
    return edge
  }
}
