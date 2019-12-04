export declare class id_t {
    name: string;
    constructor(name: string);
}
export declare class cell_complex_t {
    map: Map<id_t, cell_t>;
    constructor();
    attach(n: number, id: id_t, cmap: cmap_t): this;
}
export declare class cmap_entry_t {
    cell: cell_t;
    img_cell: cell_t;
    bound_camp: cmap_t;
    constructor(the: {
        cell: cell_t;
        img_cell: cell_t;
        bound_camp: cmap_t;
    });
}
export declare class cmap_t {
    dom: cell_complex_t;
    cod: cell_complex_t;
    map: Map<cell_t, cmap_entry_t>;
    constructor(the: {
        dom: cell_complex_t;
        cod: cell_complex_t;
        map: Map<cell_t, cmap_entry_t>;
    });
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
}
declare class spherical_evidence_t {
}
export {};
