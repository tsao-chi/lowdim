import { Spheric } from "../spheric"

export type Id = number

export abstract class Cell {
  abstract id: Id
  abstract boundary: Spheric
  abstract repr(): string

  eq(that: Cell): boolean {
    return this.id === that.id
  }
}
