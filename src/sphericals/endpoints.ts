import { Spherical } from "../spherical"
import * as Cells from "../cells"

export class Endpoints extends Spherical {
  start: Cells.Node
  end: Cells.Node

  constructor(start: Cells.Node, end: Cells.Node) {
    super()
    this.start = start
    this.end = end
  }
}
