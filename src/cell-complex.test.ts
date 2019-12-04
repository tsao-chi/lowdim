import assert from 'assert'

import { map_t } from '@cicadoidea/basic/lib/map'

import * as cx from './cell-complex'

let bin = new cx.cell_complex_t()

bin
  .attach_cmap(
    0, new cx.id_t("0"),
    new cx.cmap_t({
      dom: new cx.cell_complex_t(),
      cod: new cx.cell_complex_t(),
      map: new map_t<cx.cell_t, cx.bound_t>({
        key_eq: (x: cx.cell_t, y: cx.cell_t) => x.eq(y),
        value_eq: (x: cx.bound_t, y: cx.bound_t) => x.eq(y),
      }),
    }))
  .attach_cmap(
    0, new cx.id_t("1"),
    new cx.cmap_t({
      dom: new cx.cell_complex_t(),
      cod: new cx.cell_complex_t(),
      map: new map_t<cx.cell_t, cx.bound_t>({
        key_eq: (x: cx.cell_t, y: cx.cell_t) => x.eq(y),
        value_eq: (x: cx.bound_t, y: cx.bound_t) => x.eq(y),
      }),
    }))

console.log(bin)
