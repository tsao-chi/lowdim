import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"

export class Node implements Cell {
  id: Id
  void: Void

  constructor(the: { id: Id; void: Void }) {
    this.id = the.id
    this.void = the.void
  }

  get boundary(): Void {
    return this.void
  }

  repr(): string {
    return `${this.id}`
  }
}

export class Void implements Spheric {}
