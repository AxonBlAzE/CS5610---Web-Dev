import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import IfElse from "./IfElse";
import LegacyFunctions from "./LegacyFunctions";
import TemplateLiterals from "./TemplateLiterals";
import Ternary from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <hr />
      <h3>Javascript Basics</h3>
      <hr />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <ConditionalOutputIfElse />
      <hr />

      <h3>Javascript Functions</h3>
      <hr />
      <LegacyFunctions />
      <ArrowFunctions />
      <TemplateLiterals />
    </div>
  );
}
