import "module-alias/register"
import { Complex } from "@/index"

const graph = new Complex()

const a = graph.vertex()
const b = graph.vertex()

// console.log(a)
// console.log(b)

const f = graph.edge(a, b)
const g = graph.edge(b, a)

// console.log(f)
// console.log(g)

// console.log(graph)
