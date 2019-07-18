import rule from "../../src/rules/require-component-props-interface";
import { RuleTester } from "../RuleTester";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("require-component-props-interface", rule, {
  valid: [
    "const App: React.FC<IAnimal> = ()=> null;",
    "const App: React.FC<AnimalProps> = ()=> null;",
    "const App: React.FC<Animal> = ()=> {return (<div></div>)}",
    "const App: React.FC<Animal> = ({children})=> {return (<div></div>)}",
    "const App = ()=> null;",
  ],
  invalid: [
    {
      code: "const App: React.FC = ()=> null;",
      errors: [
        {
          messageId: "requireComponentProps",
          line: 1,
          column: 12,
        },
      ],
    },
  ],
});
