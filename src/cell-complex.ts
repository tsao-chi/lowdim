export class cell_complex_t {
  map: Map<number, Map<string, cell_t>>

  constructor() {
    this.map = new Map()
  }
}

export class cmap_t {
  dom: cell_complex_t
  cod: cell_complex_t
  map: Map<[ number, string ], [ number, string, cmap_t ]>

  constructor(the: {
    dom: cell_complex_t,
    cod: cell_complex_t,
    map: Map<[ number, string ], [ number, string, cmap_t ]>,
  }) {
    this.dom = the.dom
    this.cod = the.cod
    this.map = the.map
  }
}

export class cell_t {
  cmap: cmap_t
  spherical_proof?: spherical_proof_t

  constructor(the: {
    cmap: cmap_t,
    spherical_proof?: spherical_proof_t
  }) {
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
