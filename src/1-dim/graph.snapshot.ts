import { Complex } from "../index"

const graph = new Complex()

const a = graph.node()
const b = graph.node()

const f = graph.edge(a, b)
const g = graph.edge(b, a)

console.log(graph.repr())
