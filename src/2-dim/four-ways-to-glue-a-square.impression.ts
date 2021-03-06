import "module-alias/register"
import { Complex } from "@/index"

{
  const sphere = new Complex()

  const south = sphere.vertex()
  const middle = sphere.vertex()
  const north = sphere.vertex()

  const south_long = sphere.edge(south, middle)
  const north_long = sphere.edge(middle, north)

  const surface = sphere.face([
    south_long,
    north_long,
    north_long.inverse,
    south_long.inverse,
  ])

  console.log(sphere.repr())
}

{
  const torus = new Complex()

  const origin = torus.vertex()

  const toro = torus.edge(origin, origin)
  const polo = torus.edge(origin, origin)

  const surface = torus.face([toro, polo, toro.inverse, polo.inverse])

  console.log(torus.repr())
}

{
  const klein_bottle = new Complex()

  const origin = klein_bottle.vertex()

  const toro = klein_bottle.edge(origin, origin)
  const cross = klein_bottle.edge(origin, origin)

  const surface = klein_bottle.face([toro, cross, toro.inverse, cross])

  console.log(klein_bottle.repr())
}

{
  const projective_plane = new Complex()

  const start = projective_plane.vertex()
  const end = projective_plane.vertex()

  const left_rim = projective_plane.edge(start, end)
  const right_rim = projective_plane.edge(end, start)

  const surface = projective_plane.face([
    left_rim,
    right_rim,
    left_rim,
    right_rim,
  ])

  console.log(projective_plane.repr())
}
