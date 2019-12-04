export type id_t = number

export class vertex_t {}

export class edge_t {
  start: id_t
  end: id_t

  constructor (the: {
    start: id_t,
    end: id_t,
  }) {
    this.start = the.start
    this.end = the.end
  }
}

export class graph_t {
  vertex_dic: Map<id_t, vertex_t>
  edge_dic: Map<id_t, edge_t>

  constructor (the: {
    vertex_dic: Map<id_t, vertex_t>,
    edge_dic: Map<id_t, edge_t>,
  }) {
    this.vertex_dic = the.vertex_dic
    this.edge_dic = the.edge_dic
  }
}
