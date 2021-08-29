import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"

export class Node extends Cell {
  id: Id
  boundary: Void

  constructor(id: Id, boundary: Void) {
    super()
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    return `${this.id}`
  }
}

export class Void extends Spheric {}
