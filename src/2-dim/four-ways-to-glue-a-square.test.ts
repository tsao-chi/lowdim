import "module-alias/register"
import { Complex } from "@/index"

{
  const sphere = new Complex()

  const south = sphere.new_vertex()
  const middle = sphere.new_vertex()
  const north = sphere.new_vertex()

  const south_long = sphere.new_edge(south, middle)
  const north_long = sphere.new_edge(middle, north)

  const surface = sphere.new_face([
    south_long,
    north_long,
    north_long.inverse,
    south_long.inverse,
  ])
}

{
  const torus = new Complex()

  const origin = torus.new_vertex()

  const toro = torus.new_edge(origin, origin)
  const polo = torus.new_edge(origin, origin)

  const surface = torus.new_face([toro, polo, toro.inverse, polo.inverse])
}

{
  const klein_bottle = new Complex()

  const origin = klein_bottle.new_vertex()

  const toro = klein_bottle.new_edge(origin, origin)
  const cross = klein_bottle.new_edge(origin, origin)

  const surface = klein_bottle.new_face([toro, cross, toro.inverse, cross])
}

{
  const projective_plane = new Complex()

  const start = projective_plane.new_vertex()
  const end = projective_plane.new_vertex()

  const left_rim = projective_plane.new_edge(start, end)
  const right_rim = projective_plane.new_edge(end, start)

  const surface = projective_plane.new_face([
    left_rim,
    right_rim,
    left_rim,
    right_rim,
  ])
}
