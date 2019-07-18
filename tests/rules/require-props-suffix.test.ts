import rule from "../../src/rules/require-props-suffix";
import { RuleTester } from "../RuleTester";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("require-props-suffix", rule, {
  valid: [
    "const App: React.FC = ()=> null;",
    "const App: React.FC<IAnimalProps> = ()=> null;",
    "const App: React.FC<AnimalProps> = ()=> null;",
    "const App: React.FC<AnimalProps> = ()=> {return (<div></div>)}",
    "const App: React.FC<AnimalProps> = ({children})=> {return (<div></div>)}",
    "const App = ()=> null;",
  ],
  invalid: [
    {
      code: "const App: React.FC<IAnimal> = ()=> null;",
      errors: [
        {
          messageId: "requireSuffix",
          line: 1,
          column: 12,
        },
      ],
    },
    {
      code: "const App: React.FC<Props> = ()=> null;",
      errors: [
        {
          messageId: "requireSuffix",
          line: 1,
          column: 12,
        },
      ],
    },
    {
      code: "const App: React.FC<IAnimalprops> = ()=> null;",
      errors: [
        {
          messageId: "requireSuffix",
          line: 1,
          column: 12,
        },
      ],
    },
    {
      code: "const App: React.FC<> = ()=> null;",
      errors: [
        {
          messageId: "requireSuffix",
          line: 1,
          column: 12,
        },
      ],
    },
  ],
});
