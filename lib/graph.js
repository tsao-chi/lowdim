"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vertex_t {
}
exports.vertex_t = vertex_t;
class edge_t {
    constructor(the) {
        this.start = the.start;
        this.end = the.end;
    }
}
exports.edge_t = edge_t;
class graph_t {
    constructor(the) {
        this.vertex_dic = the.vertex_dic;
        this.edge_dic = the.edge_dic;
    }
}
exports.graph_t = graph_t;
//# sourceMappingURL=graph.js.map