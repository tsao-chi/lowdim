import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"

export class Vertex implements Cell {
  id: Id
  complex: Complex

  constructor(the: { id: Id; complex: Complex }) {
    this.id = the.id
    this.complex = the.complex
  }

  repr(): string {
    return this.id.toString()
  }
}
