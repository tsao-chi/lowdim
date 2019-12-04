"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class cell_complex_t {
    constructor() {
        this.map = new Map();
    }
    attach(n, cmap) {
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
//   about boundary
class cell_t {
    constructor(the) {
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