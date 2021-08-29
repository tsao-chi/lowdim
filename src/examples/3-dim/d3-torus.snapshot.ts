import { Complex } from "../.."

{
  const d3_torus = new Complex()

  const o = d3_torus.node()

  const a = d3_torus.edge(o, o)
  const b = d3_torus.edge(o, o)
  const c = d3_torus.edge(o, o)

  const ap = d3_torus.face([c, b, c.inv, b.inv])
  const bp = d3_torus.face([a, c, a.inv, c.inv])
  const cp = d3_torus.face([b, a, b.inv, a.inv])

  const s = d3_torus.body([
    [bp, 0, 3, cp],
    [bp, 3, 0, ap],
    [cp, 0, 3, ap],
    [cp, 2, 1, ap],
    [cp, 1, 2, bp],
    [ap, 2, 1, bp],
  ])

  // TODO Syntax inspired by logic programming and relational algebra.

  // const s = d3_torus.body([
  //   ap(b3, c2, a2, c0),
  //   bp(b0, a2, c1, b3),
  //   cp(c0, c1, c2, b0),
  // ])

  console.log(d3_torus.repr())
}
