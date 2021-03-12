import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Spheric } from "@/spheric"

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

export class Void implements Spheric {
  complex: Complex

  constructor(the: { complex: Complex }) {
    this.complex = the.complex
  }
}
