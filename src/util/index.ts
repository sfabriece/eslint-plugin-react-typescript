import { ESLintUtils } from "@typescript-eslint/experimental-utils";

export * from "./createRule";

// this is done for convenience - saves migrating all of the old rules
const { applyDefault, deepMerge, isObjectNotArray } = ESLintUtils;
export { applyDefault, deepMerge, isObjectNotArray };
