import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { actions, getState } from "../state";

const Display = () => {
  const dispatch = useDispatch();
  const { inputValue, outputValue } = useSelector((state) => getState(state));
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      dispatch(actions.evaluate());
    } else {
      dispatch(actions.setInputValue(e.key));
    }
  };
  const onKeyDown = (e) => {
    if (e.key == "Backspace") {
      dispatch(actions.erase());
    }
  };
  return (
    <>
      <Input.TextArea
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        className="textarea-input"
        bordered={false}
        autoSize={{ minRows: 3 }}
        value={inputValue}
        autoFocus
        id="input-panel"
      />
      <div className="output">{outputValue}</div>
    </>
  );
};

export default Display;
