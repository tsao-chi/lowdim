// TODO
//   id must be structured
//   because we will generate attachment based on existing skeleton
export class id_t {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

// TODO
//   test how to use id as key
export class cell_complex_t {
  map: Map<id_t, cell_t>

  constructor() {
    this.map = new Map()
  }

  attach(n: number, id: id_t, cmap: cmap_t): this {
    // TODO
    //   check cmap.cod is n dim skeleton of this
    return this
  }
}

export class cmap_t {
  dom: cell_complex_t
  cod: cell_complex_t
  map: Map<[ number, id_t ], [ number, id_t, cmap_t ]>

  constructor(the: {
    dom: cell_complex_t,
    cod: cell_complex_t,
    map: Map<[ number, id_t ], [ number, id_t, cmap_t ]>,
  }) {
    this.dom = the.dom
    this.cod = the.cod
    this.map = the.map

    // TODO
    //   check map is continuous
    //   by condition on boundary
  }
}

// TODO
//   the relationship between boundary of cell and dom cod of cmap
//   more about the CW topology of cell-complex
export class cell_t {
  dim: number
  cmap: cmap_t
  spherical_proof?: spherical_proof_t

  constructor(the: {
    dim: number,
    cmap: cmap_t,
    spherical_proof?: spherical_proof_t
  }) {
    this.dim = the.dim
    this.cmap = the.cmap
    if (the.spherical_proof) {
      // TODO
      //   check the spherical_proof
      this.spherical_proof = the.spherical_proof
    } else {
      // TODO
      //   try to generate spherical_proof
      this.spherical_proof = new spherical_proof_t()
    }
  }
}

class spherical_proof_t {
  /**
   * [detail definition omitted]
   */
}
