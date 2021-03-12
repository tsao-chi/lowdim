import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"

export class Node implements Cell {
  id: Id
  complex: Complex

  constructor(the: { id: Id; complex: Complex }) {
    this.id = the.id
    this.complex = the.complex
  }

  get boundary(): Void {
    return new Void({ ...this })
  }

  repr(): string {
    return `${this.id}`
  }
}

export class Void {
  complex: Complex

  constructor(the: { complex: Complex }) {
    this.complex = the.complex
  }
}
