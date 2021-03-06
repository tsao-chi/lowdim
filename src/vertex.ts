import { Cell, Id } from "@/cell"

export class Vertex implements Cell {
  id: Id

  constructor(the: { id: Id }) {
    this.id = the.id
  }
}
