export declare class cell_complex_t {
    map: Map<number, Map<string, cell_t>>;
    constructor();
    attach(n: number, cmap: cmap_t): this;
}
export declare class cmap_t {
    dom: cell_complex_t;
    cod: cell_complex_t;
    map: Map<[number, string], [number, string, cmap_t]>;
    constructor(the: {
        dom: cell_complex_t;
        cod: cell_complex_t;
        map: Map<[number, string], [number, string, cmap_t]>;
    });
}
export declare class cell_t {
    cmap: cmap_t;
    spherical_proof?: spherical_proof_t;
    constructor(the: {
        cmap: cmap_t;
        spherical_proof?: spherical_proof_t;
    });
}
declare class spherical_proof_t {
}
export {};
