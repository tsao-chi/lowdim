import "module-alias/register"
import { Complex } from "@/index"

const graph = new Complex()

const a = graph.new_vertex()
const b = graph.new_vertex()

// console.log(a)
// console.log(b)

const f = graph.new_edge(a, b)
const g = graph.new_edge(b, a)

// console.log(f)
// console.log(g)

// console.log(graph)
