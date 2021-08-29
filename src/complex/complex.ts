import { Cell, Id } from "../cell"
import { Node, Void } from "../node"
import { Edge, Endpoints } from "../edge"
import { Face, Polygon } from "../face"
import { Body, Polyhedron } from "../body"

export class Complex {
  nodes: Node[]
  edges: Edge[]
  faces: Face[]
  bodies: Body[]

  constructor() {
    this.nodes = []
    this.edges = []
    this.faces = []
    this.bodies = []
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
        s += "\n"
      }
    }

    if (this.bodies.length > 0) {
      s += "bodies:\n"
      for (const body of this.bodies) {
        s += body.repr()
        s += "\n"
      }
    }

    return s
  }

  // NOTE 0-dim

  node(): Node {
    const id = this.nodes.length
    const node = new Node(id, new Void())
    this.nodes.push(node)
    return node
  }

  // NOTE 1-dim

  edge(start: Node, end: Node): Edge {
    const id = this.edges.length
    const endpoints = new Endpoints(start, end)
    const edge = new Edge(id, endpoints)
    this.edges.push(edge)
    return edge
  }

  // NOTE 2-dim

  face(circuit: Edge[]): Face {
    const id = this.faces.length
    const polygon = new Polygon(circuit)
    const face = new Face(id, polygon)
    this.faces.push(face)
    return face
  }

  // NOTE 3-dim

  body(pairs: Array<[Face, number, number, Face]>): Body {
    const id = this.bodies.length
    const polyhedron = new Polyhedron(pairs)
    const body = new Body(id, polyhedron)
    this.bodies.push(body)
    return body
  }

  // TODO
}
