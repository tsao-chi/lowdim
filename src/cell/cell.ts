import { Spherical } from "../spherical"

export type Id = number

export abstract class Cell {
  abstract id: Id
  abstract boundary: Spherical
  abstract repr(): string

  eq(that: Cell): boolean {
    return this.id === that.id
  }
}
