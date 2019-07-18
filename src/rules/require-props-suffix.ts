import * as util from "../util";

export default util.createRule({
  name: "require-props-suffix",
  defaultOptions: [],

  meta: {
    type: "problem",
    docs: {
      description: "Require that prop interface names be suffixed with `Props`",
      category: "Best Practices",
      recommended: "error",
    },
    messages: {
      requireSuffix: "prop interface names be suffixed with `Props`",
    },
    schema: [],
  },
  create(context: any) {
    /**
     * Checks if a string is suffixed with "Props".
     * @param name The string to check
     */
    function isSuffixedWithProps(name: string): boolean {
      if (typeof name !== "string") {
        return false;
      }

      const minLength = "Props".length + 1;

      return name.length >= minLength && name.endsWith("Props");
    }

    return {
      TSQualifiedName(node: any): void {
        if (node.left.name === "React" && node.right.name === "FC") {
          if (!node.parent.typeParameters) {
            context.report({
              node,
              messageId: "requireSuffix",
            });

            return;
          }

          if (
            !isSuffixedWithProps(
              node.parent.typeParameters.params[0].typeName.name
            )
          ) {
            context.report({
              node,
              messageId: "requireSuffix",
            });

            return;
          }
        }
      },
    };
  },
});
