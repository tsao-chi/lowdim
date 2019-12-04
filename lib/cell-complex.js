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
        this.dim = the.dim;
        this.cmap = the.cmap;
        if (the.spherical_proof) {
            // TODO
            //   check the spherical_proof
            this.spherical_proof = the.spherical_proof;
        }
        else {
            // TODO
            //   try to generate spherical_proof
            this.spherical_proof = new spherical_proof_t();
        }
    }
}
exports.cell_t = cell_t;
class spherical_proof_t {
}
//# sourceMappingURL=cell-complex.js.map