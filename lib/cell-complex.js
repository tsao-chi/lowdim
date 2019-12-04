"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO
//   id must be structured
//   because we will generate attachment based on existing skeleton
class id_t {
    constructor(name) {
        this.name = name;
    }
}
exports.id_t = id_t;
// TODO
//   test how to use id as key
class cell_complex_t {
    constructor() {
        this.map = new Map();
    }
    attach(n, id, cmap) {
        // TODO
        //   check cmap.cod is n dim skeleton of this
        return this;
    }
}
exports.cell_complex_t = cell_complex_t;
class cmap_entry_t {
    constructor(the) {
        this.cell = the.cell;
        this.img_cell = the.img_cell;
        this.bound_camp = the.bound_camp;
    }
}
exports.cmap_entry_t = cmap_entry_t;
class cmap_t {
    constructor(the) {
        this.dom = the.dom;
        this.cod = the.cod;
        this.map = the.map;
        // TODO
        //   check map is continuous
        //   by condition on boundary
    }
}
exports.cmap_t = cmap_t;
// TODO
//   the relationship between boundary of cell and dom cod of cmap
//   more about the CW topology of cell-complex
class cell_t {
    constructor(the) {
        this.id = the.id;
        this.dim = the.dim;
        this.cmap = the.cmap;
        if (the.spherical_evidence) {
            // TODO
            //   check the spherical_evidence
            this.spherical_evidence = the.spherical_evidence;
        }
        else {
            // TODO
            //   try to generate spherical_evidence
            this.spherical_evidence = new spherical_evidence_t();
        }
    }
}
exports.cell_t = cell_t;
class spherical_evidence_t {
}
