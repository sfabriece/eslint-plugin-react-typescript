import * as util from "../util";

export default util.createRule({
  name: "require-component-props-interface",
  defaultOptions: [],

  meta: {
    type: "problem",
    docs: {
      description: "Require an props interface to be provided to a component",
      category: "Best Practices",
      recommended: "error",
    },
    messages: {
      requireComponentProps: "props interface to be provided to a component",
    },
    schema: [],
  },
  create(context: any) {
    /**
     * Checks if a string is suffixed with "Props".
     * @param name The string to check
     */

    return {
      TSQualifiedName(node: any): void {
        if (node.left.name === "React" && node.right.name === "FC") {
          if (!node.parent.typeParameters) {
            context.report({
              node,
              messageId: "requireComponentProps",
            });

            return;
          }

          if (node.parent.typeParameters.params.length === 0) {
            context.report({
              node,
              messageId: "requireComponentProps",
            });

            return;
          }
        }
      },
    };
  },
});
