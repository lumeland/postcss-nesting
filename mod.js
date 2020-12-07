import walk from "./lib/walk.js";

const postcssNesting = () => {
  return {
    postcssPlugin: "postcss-nesting",
    Once(root) {
      walk(root);
    },
  };
};

postcssNesting.postcss = true;

export default postcssNesting;
