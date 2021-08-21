import { useSelector } from "react-redux";
import { getState } from "../state";
import Display from "./Display";
import Keypad from "./Keypad";
import Toolbar from "./Toolbar";
import History from "./History";

const Calculator = () => {
  const { inputMode } = useSelector((state) => getState(state));
  return (
    <div className="content">
      <div className="calculator">
        <Display />
        <Toolbar />
        {inputMode ? <Keypad /> : <History />}
      </div>
    </div>
  );
};

export default Calculator;
