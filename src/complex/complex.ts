import { Cell, Id } from "@/cell"
import { Node } from "@/node"
import { Edge, Endpoints } from "@/edge"
import { Face, Polygon } from "@/face"

export class Complex {
  nodes: Node[]
  edges: Edge[]
  faces: Face[]

  constructor() {
    this.nodes = []
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

    if (this.nodes.length > 0) {
      s += "nodes:\n"
      s += this.nodes.map((node) => node.repr()).join(", ")
      s += "\n"
    }

    if (this.edges.length > 0) {
      s += "edges:\n"
      s += this.edges.map((edge) => edge.repr()).join("\n")
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

  node(): Node {
    const id = this.nodes.length
    const node = new Node({ id, complex: this })
    this.nodes.push(node)
    return node
  }

  // NOTE 1-dim

  edge(start: Node, end: Node): Edge {
    const id = this.edges.length
    const edge = new Edge({ id, ...new Endpoints({ start, end }) })
    this.edges.push(edge)
    return edge
  }

  // NOTE 2-dim

  face(circuit: Edge[]): Face {
    const id = this.faces.length
    const face = new Face({ id, ...new Polygon({ circuit }) })
    this.faces.push(face)
    return face
  }

  // NOTE 3-dim

  // TODO
}
