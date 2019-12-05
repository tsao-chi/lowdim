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
let empty_cell_complex = new cx.cell_complex_t();
let empty_bound_map = new map_1.map_t({
    key_eq: (x, y) => x.eq(y),
    value_eq: (x, y) => x.eq(y),
});
let empty_cmap = new cx.cmap_t({
    dom: empty_cell_complex,
    cod: empty_cell_complex,
    map: empty_bound_map,
});
let bin = new cx.cell_complex_t();
bin.attach_cmap(0, new cx.id_t("0"), empty_cmap);
bin.attach_cmap(0, new cx.id_t("1"), empty_cmap);
let interval = new cx.cell_complex_t();
interval.attach_cmap(0, new cx.id_t("0"), empty_cmap);
interval.attach_cmap(0, new cx.id_t("1"), empty_cmap);
interval.attach_cmap(1, new cx.id_t("inter"), new cx.cmap_t({
    dom: bin,
    cod: interval.dim_skeleton(0),
    map: new map_1.map_t({
        key_eq: (x, y) => x.eq(y),
        value_eq: (x, y) => x.eq(y),
    }).set_array([
        [bin.cell(new cx.id_t("0")),
            new cx.bound_t({
                src: bin.cell(new cx.id_t("0")),
                tar: interval.dim_skeleton(0).cell(new cx.id_t("0")),
                cmap: empty_cmap,
            })],
        [bin.cell(new cx.id_t("1")),
            new cx.bound_t({
                src: bin.cell(new cx.id_t("1")),
                tar: interval.dim_skeleton(0).cell(new cx.id_t("1")),
                cmap: empty_cmap,
            })],
    ]),
}));
console.log(interval.repr());
