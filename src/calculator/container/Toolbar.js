import {
  ClockCircleFilled,
  CloseOutlined,
  CaretLeftFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actions } from "../state";

const Toolbar = () => {
  const dispatch = useDispatch();
  const inputFocus = () => {
    document.getElementById("input-panel").focus();
  };
  const clear = () => {
    inputFocus();
    dispatch(
      actions.setValues([
        { key: "inputValue", value: "" },
        { key: "outputValue", value: "0" },
        { key: "cursorLocation", value: 0 },
      ])
    );
  };
  const history = () => {
    inputFocus();
    dispatch(actions.toggleInputMode());
  };
  const erase = () => {
    inputFocus();
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
