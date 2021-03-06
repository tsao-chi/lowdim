import { Cell, Id } from "@/cell"
import { Vertex } from "@/vertex"
import { Edge, Endpoints } from "@/edge"
import { Face, Polygon } from "@/face"

export class Complex {
  vertexes: Vertex[]
  edges: Edge[]
  faces: Face[]

  constructor() {
    this.vertexes = []
    this.edges = []
    this.faces = []
  }

  static same(complexes: Complex[]): void {
    if (complexes.length === 0) return

    const [head, ...rest] = complexes

    if (rest.some((other) => head !== other)) {
      throw new Error("Expecting complexes to be the same.")
    }
  }

  // NOTE 0-dim

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

  // NOTE 1-dim

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

  new_edge(start: Id, end: Id): Edge {
    const id = this.edges.length
    const edge = new Edge({ id, ...this.endpoints(start, end) })
    this.edges.push(edge)
    return edge
  }

  // NOTE 2-dim

  face(id: Id): Face {
    const face = this.faces[id]
    if (face === undefined) throw new Error(`unknown face id: ${id}`)
    return face
  }

  polygon(circuit: Id[]): Polygon {
    return new Polygon({
      circuit: circuit.map((id) => this.edge(id)),
    })
  }

  new_face(circuit: Id[]): Face {
    const id = this.faces.length
    const face = new Face({ id, ...this.polygon(circuit) })
    this.faces.push(face)
    return face
  }
}
