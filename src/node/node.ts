import { Cell, Id } from "../cell"
import { Spheric } from "../spheric"

export class Node implements Cell {
  id: Id
  boundary: Void

  constructor(id: Id, boundary: Void) {
    this.id = id
    this.boundary = boundary
  }

  repr(): string {
    return `${this.id}`
  }
}

export class Void implements Spheric {}
