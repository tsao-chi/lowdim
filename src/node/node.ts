import { Cell, Id } from "@/cell"
import { Complex } from "@/complex"
import { Spheric } from "@/spheric"

export class Node implements Cell {
  id: Id
  complex: Complex
  void: Void

  constructor(the: { id: Id; void: Void }) {
    this.id = the.id
    this.complex = the.void.complex
    this.void = the.void
  }

  get boundary(): Void {
    return this.void
  }

  repr(): string {
    return `${this.id}`
  }
}

export class Void implements Spheric {
  complex: Complex

  constructor(complex: Complex) {
    this.complex = complex
  }
}
