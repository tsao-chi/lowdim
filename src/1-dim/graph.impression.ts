import "module-alias/register"
import { Complex } from "@/index"

const graph = new Complex()

const a = graph.vertex()
const b = graph.vertex()

const f = graph.edge(a, b)
const g = graph.edge(b, a)

console.log(graph.repr())
