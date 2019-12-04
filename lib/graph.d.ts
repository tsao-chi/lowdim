export declare type id_t = number;
export declare class vertex_t {
}
export declare class edge_t {
    start: id_t;
    end: id_t;
    constructor(the: {
        start: id_t;
        end: id_t;
    });
}
export declare class graph_t {
    vertex_dic: Map<id_t, vertex_t>;
    edge_dic: Map<id_t, edge_t>;
    constructor(the: {
        vertex_dic: Map<id_t, vertex_t>;
        edge_dic: Map<id_t, edge_t>;
    });
}
