/**
 * @fileoverview Require an props interface to be provided to a component
 * @author Fabriece Sumuni
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/require-component-props-interface");
const RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser"
});

ruleTester.run("require-component-props-interface", rule, {
  valid: [
    // give me some code that won't trigger a warning
    `
interface IProps{
    name: string;
}

const Button: React.FC<IProps> = () => null;
`
  ],

  invalid: [
    {
      code: "",
      errors: [
        {
          message: "Fill me in.",
          type: "Me too"
        }
      ]
    }
  ]
});
