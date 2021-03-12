import "module-alias/register"
import { Complex } from "@/index"

{
  const d3_torus = new Complex()

  const o = d3_torus.node()

  const a = d3_torus.edge(o, o)
  const b = d3_torus.edge(o, o)
  const c = d3_torus.edge(o, o)

  const ap = d3_torus.face([c, b, c.inverse, b.inverse])
  const bp = d3_torus.face([a, c, a.inverse, c.inverse])
  const cp = d3_torus.face([b, a, b.inverse, a.inverse])

  const s = d3_torus.body([
    [bp, 0, 3, cp],
    [bp, 3, 0, ap],
    [cp, 0, 3, ap],
    [cp, 2, 1, ap],
    [cp, 1, 2, bp],
    [ap, 2, 1, bp],
  ])

  console.log(d3_torus.repr())
}
