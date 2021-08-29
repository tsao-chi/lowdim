import { Cell, Id } from "../cell"
import * as Cells from "../cells"
import * as Sphericals from "../sphericals"

export class Complex {
  nodes: Cells.Node[]
  edges: Cells.Edge[]
  faces: Cells.Face[]
  bodies: Cells.Body[]

  constructor() {
    this.nodes = []
    this.edges = []
    this.faces = []
    this.bodies = []
  }

  node(): Cells.Node {
    const id = this.nodes.length
    const node = new Cells.Node(id, new Sphericals.Void())
    this.nodes.push(node)
    return node
  }

  edge(start: Cells.Node, end: Cells.Node): Cells.Edge {
    const id = this.edges.length
    const edge = new Cells.Edge(id, new Sphericals.Endpoints(start, end))
    this.edges.push(edge)
    return edge
  }

  face(circuit: Cells.Edge[]): Cells.Face {
    const id = this.faces.length
    const face = new Cells.Face(id, new Sphericals.Polygon(circuit))
    this.faces.push(face)
    return face
  }

  body(pairs: Array<[Cells.Face, number, number, Cells.Face]>): Cells.Body {
    const id = this.bodies.length
    const body = new Cells.Body(id, new Sphericals.Polyhedron(pairs))
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
