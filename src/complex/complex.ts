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

  node(): Node {
    const id = this.nodes.length
    const node = new Node(id, new Void())
    this.nodes.push(node)
    return node
  }

  edge(start: Node, end: Node): Edge {
    const id = this.edges.length
    const edge = new Edge(id, new Endpoints(start, end))
    this.edges.push(edge)
    return edge
  }

  face(circuit: Edge[]): Face {
    const id = this.faces.length
    const face = new Face(id, new Polygon(circuit))
    this.faces.push(face)
    return face
  }

  body(pairs: Array<[Face, number, number, Face]>): Body {
    const id = this.bodies.length
    const body = new Body(id, new Polyhedron(pairs))
    this.bodies.push(body)
    return body
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
}
