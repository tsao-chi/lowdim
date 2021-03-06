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

  repr(): string {
    let s = ""

    if (this.vertexes.length > 0) {
      s += "vertexes:\n"
      s += this.vertexes.map(vertex => vertex.repr()).join(", ")
      s += "\n"
    }

    if (this.edges.length > 0) {
      s += "edges:\n"
      s += this.edges.map(edge => edge.repr()).join("\n")
      s += "\n"
    }

    if (this.faces.length > 0) {
      s += "faces:\n"
      for (const face of this.faces) {
        s += face.repr()
      }
      s += "\n"
    }

    return s
  }

  // NOTE 0-dim

  vertex(): Vertex {
    const id = this.vertexes.length
    const vertex = new Vertex({ id, complex: this })
    this.vertexes.push(vertex)
    return vertex
  }

  // NOTE 1-dim

  private endpoints(start: Vertex, end: Vertex): Endpoints {
    return new Endpoints({
      start,
      end,
    })
  }

  edge(start: Vertex, end: Vertex): Edge {
    const id = this.edges.length
    const edge = new Edge({ id, ...this.endpoints(start, end) })
    this.edges.push(edge)
    return edge
  }

  // NOTE 2-dim

  private polygon(circuit: Edge[]): Polygon {
    return new Polygon({ circuit })
  }

  face(circuit: Edge[]): Face {
    const id = this.faces.length
    const face = new Face({ id, ...this.polygon(circuit) })
    this.faces.push(face)
    return face
  }
}
