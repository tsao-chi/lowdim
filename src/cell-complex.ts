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

export class cmap_entry_t {
  cell: cell_t
  img_cell: cell_t
  bound_camp: cmap_t

  constructor(the: {
    cell: cell_t,
    img_cell: cell_t,
    bound_camp: cmap_t,
  }) {
    this.cell = the.cell
    this.img_cell = the.img_cell
    this.bound_camp = the.bound_camp
  }
}

export class cmap_t {
  dom: cell_complex_t
  cod: cell_complex_t
  map: Map<cell_t , cmap_entry_t>

  constructor(the: {
    dom: cell_complex_t,
    cod: cell_complex_t,
    map: Map<cell_t , cmap_entry_t>,
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
  id: id_t
  dim: number
  cmap: cmap_t
  spherical_evidence?: spherical_evidence_t

  constructor(the: {
    id: id_t,
    dim: number,
    cmap: cmap_t,
    spherical_evidence?: spherical_evidence_t
  }) {
    this.id = the.id
    this.dim = the.dim
    this.cmap = the.cmap
    if (the.spherical_evidence) {
      // TODO
      //   check the spherical_evidence
      this.spherical_evidence = the.spherical_evidence
    } else {
      // TODO
      //   try to generate spherical_evidence
      this.spherical_evidence = new spherical_evidence_t()
    }
  }
}

class spherical_evidence_t {
  /**
   * [detail definition omitted]
   */
}
