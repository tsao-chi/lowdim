"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("@cicadoidea/basic/lib/map");
const cx = __importStar(require("./cell-complex"));
let bin = new cx.cell_complex_t();
bin
    .attach_cmap(0, new cx.id_t("0"), new cx.cmap_t({
    dom: new cx.cell_complex_t(),
    cod: new cx.cell_complex_t(),
    map: new map_1.map_t({
        key_eq: (x, y) => x.eq(y),
        value_eq: (x, y) => x.eq(y),
    }),
}))
    .attach_cmap(0, new cx.id_t("1"), new cx.cmap_t({
    dom: new cx.cell_complex_t(),
    cod: new cx.cell_complex_t(),
    map: new map_1.map_t({
        key_eq: (x, y) => x.eq(y),
        value_eq: (x, y) => x.eq(y),
    }),
}));
console.log(bin);
