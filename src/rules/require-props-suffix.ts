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
      requireSuffix: "Prop interfaces must be suffixed with `Props`",
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

    function reportError(node: any) {
      context.report({
        node,
        messageId: "requireSuffix",
      });
    }

    return {
      TSQualifiedName(node: any): void {
        if (
          node.left.name === "React" &&
          node.right.name === "FC" &&
          node.parent.typeParameters &&
          node.parent.typeParameters.params[0].typeName
        ) {
          if (node.parent.typeParameters.params.length === 0) {
            return reportError(node);
          }

          if (
            !isSuffixedWithProps(
              node.parent.typeParameters.params[0].typeName.name
            )
          ) {
            return reportError(node);
          }
        }
      },
    };
  },
});
