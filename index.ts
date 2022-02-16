import * as aq from "arquero";

const data = {
  a: [1, 3, 5, 7],
  b: [2, 4, 6, 8],
};

const dt = aq.table(data).derive({ c: d => d?.a + d?.b });

console.log(dt.toJSON());
