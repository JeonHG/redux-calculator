import { useSelector } from "react-redux";
import { getState } from "../state";
import Display from "./Display";
import Keypad from "./Keypad";
import Toolbar from "./Toolbar";

const Calculator = () => {
  // const { isLoading } = useSelector((state) => getState(state));
  // console.log(isLoading);
  return (
    <div className="content">
      <div className="calculator">
        <Display />
        <Toolbar />
        <Keypad />
      </div>
    </div>
  );
};

export default Calculator;
