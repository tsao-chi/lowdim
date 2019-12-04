"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const map_1 = require("@cicadoidea/basic/lib/map");
// TODO
//   id must be structured
//   because we will generate attachment based on existing skeleton
class id_t {
    constructor(name) {
        this.name = name;
    }
    eq(that) {
        return (this.name === that.name);
    }
}
exports.id_t = id_t;
class cell_complex_t {
    constructor() {
        this.map = new map_1.map_t({
            key_eq: (x, y) => x.eq(y),
            value_eq: (x, y) => x.eq(y),
        });
    }
    *cells() {
        for (let cell of this.map.values()) {
            yield cell;
        }
    }
    eq(that) {
        return this.map.weak_eq(that.map);
    }
    dim_skeleton(dim) {
        let skeleton = new cell_complex_t();
        for (let [id, cell] of this.map) {
            if (cell.dim <= dim) {
                skeleton.map.set(id, cell);
            }
        }
        return skeleton;
    }
    attach(dim, id, cmap) {
        assert_1.default(cmap.cod.eq(this.dim_skeleton(dim)));
        let cell = new cell_t({ dim, id, cmap });
        this.map.set(id, cell);
        return this;
    }
}
exports.cell_complex_t = cell_complex_t;
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
    *boundaries() {
        for (let index of this.cmap.dom.cells()) {
            let bound = this.cmap.map.get_unwrap(index);
            let boundary = bound.tar;
            yield [index, boundary];
        }
    }
    boundary_map() {
        let map = new map_1.map_t({
            key_eq: (x, y) => x.eq(y),
            value_eq: (x, y) => x.eq(y),
        });
        return map.set_iter(this.boundaries());
    }
    eq(that) {
        return this.id.eq(that.id) &&
            (this.dim === that.dim) &&
            this.cmap.eq_ignore_cod(that.cmap);
    }
}
exports.cell_t = cell_t;
class spherical_evidence_t {
}
exports.spherical_evidence_t = spherical_evidence_t;
class cmap_t {
    constructor(the) {
        /**
         * Check map is continuous.
         *   boundary(map(cell)) == map(boundary(cell))
         */
        for (let cell of the.dom.cells()) {
            let bound = the.map.get_unwrap(cell);
            let map_then_boundary = this.cell_orientation(cell).compose(bound.tar.boundary_map());
            let boundary_then_map = cell.boundary_map().endo_map_on_value(boundary => the.map.get_unwrap(boundary).tar);
            assert_1.default(map_then_boundary.weak_eq(boundary_then_map));
        }
        this.dom = the.dom;
        this.cod = the.cod;
        this.map = the.map;
    }
    cell_orientation(cell) {
        let orientation = new map_1.map_t({
            key_eq: (x, y) => x.eq(y),
            value_eq: (x, y) => x.eq(y),
        });
        let bound = this.map.get_unwrap(cell);
        for (let index of bound.cmap.dom.cells()) {
            let tar = bound.cmap.map.get_unwrap(index).tar;
            orientation.set(index, tar);
        }
        return orientation;
    }
    eq(that) {
        return this.dom.eq(that.dom) &&
            this.cod.eq(that.cod) &&
            this.map.weak_eq(that.map);
    }
    eq_ignore_cod(that) {
        return this.dom.eq(that.dom) &&
            this.map.weak_eq(that.map);
    }
}
exports.cmap_t = cmap_t;
class bound_t {
    constructor(the) {
        assert_1.default(the.cmap.dom === the.src.cmap.dom);
        assert_1.default(the.cmap.cod === the.tar.cmap.dom);
        this.src = the.src;
        this.tar = the.tar;
        this.cmap = the.cmap;
    }
    eq(that) {
        return this.src.eq(that.src) &&
            this.tar.eq(that.tar) &&
            this.cmap.eq_ignore_cod(that.cmap);
    }
}
exports.bound_t = bound_t;
