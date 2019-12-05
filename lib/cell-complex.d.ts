import { map_t } from '@cicadoidea/basic/lib/map';
export declare class id_t {
    name: string;
    constructor(name: string);
    eq(that: id_t): boolean;
}
export declare class cell_complex_t {
    private map;
    constructor();
    cell(id: id_t): cell_t;
    cells(): Generator<cell_t, void, unknown>;
    eq(that: cell_complex_t): boolean;
    dim_skeleton(dim: number): cell_complex_t;
    attach_cmap(dim: number, id: id_t, cmap: cmap_t): this;
    repr(): string;
}
export declare class cell_t {
    id: id_t;
    dim: number;
    cmap: cmap_t;
    spherical_evidence?: spherical_evidence_t;
    constructor(the: {
        id: id_t;
        dim: number;
        cmap: cmap_t;
        spherical_evidence?: spherical_evidence_t;
    });
    boundaries(): Generator<[cell_t, cell_t], void, unknown>;
    boundary_map(): map_t<cell_t, cell_t>;
    eq(that: cell_t): boolean;
}
export declare class spherical_evidence_t {
}
export declare class cmap_t {
    dom: cell_complex_t;
    cod: cell_complex_t;
    map: map_t<cell_t, bound_t>;
    constructor(the: {
        dom: cell_complex_t;
        cod: cell_complex_t;
        map: map_t<cell_t, bound_t>;
    });
    cell_orientation(cell: cell_t): map_t<cell_t, cell_t>;
    eq(that: cmap_t): boolean;
    eq_ignore_cod(that: cmap_t): boolean;
}
export declare class bound_t {
    src: cell_t;
    tar: cell_t;
    cmap: cmap_t;
    constructor(the: {
        src: cell_t;
        tar: cell_t;
        cmap: cmap_t;
    });
    eq(that: bound_t): boolean;
}
