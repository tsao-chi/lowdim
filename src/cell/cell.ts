import { Complex } from "@/complex"
import { Spheric } from "@/spheric"

export type Id = number

export type Cell = {
  id: Id
  complex: Complex
  boundary: Spheric
  repr(): string
}

export function cell_eq(x: Cell, y: Cell): boolean {
  return x.id === y.id && x.complex === y.complex
}
