import { list } from "https://deno.land/x/postcss/mod.js";

const { comma } = list;

export default function mergeParams(fromParams, toParams) {
  return comma(fromParams).map(
    (params1) =>
      comma(toParams).map(
        (params2) => `${params1} and ${params2}`,
      ).join(", "),
  ).join(", ");
}
