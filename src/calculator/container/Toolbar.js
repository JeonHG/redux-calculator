import {
  ClockCircleFilled,
  CloseOutlined,
  CaretLeftFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actions } from "../state";

const Toolbar = () => {
  const dispatch = useDispatch();
  const clear = () => {
    document.getElementById("input-panel").focus();
    dispatch(
      actions.setValues([
        { key: "inputValue", value: "" },
        { key: "outputValue", value: "0" },
      ])
    );
  };
  const history = () => {
    document.getElementById("input-panel").focus();
    dispatch(actions.toggleInputMode());
  };
  const erase = () => {
    document.getElementById("input-panel").focus();
    dispatch(actions.erase());
    dispatch(actions.updateCursor(-1));
  };

  return (
    <div className="button-grid">
      <ClockCircleFilled className="button-toolbar" onClick={history} />
      <CloseOutlined className="button-toolbar" onClick={clear} />
      <CaretLeftFilled className="button-toolbar" onClick={erase} />
    </div>
  );
};

export default Toolbar;
