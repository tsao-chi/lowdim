import { Spheric } from "../spheric"

export type Id = number

export type Cell = {
  id: Id
  boundary: Spheric
  repr(): string
}

export function cell_eq(x: Cell, y: Cell): boolean {
  return x.id === y.id
}
