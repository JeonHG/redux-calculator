import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { actions, getState } from "../state";
import { useRef } from "react";

const Display = () => {
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const { inputValue, outputValue } = useSelector((state) => getState(state));
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      dispatch(actions.evaluate());
    }
  };
  // const onKeyDown = (e) => {
  //   if (e.key == "Backspace") {
  //     dispatch(actions.erase());
  //   }
  // };
  const onChange = (e) => {
    dispatch(actions.setValues([{ key: "inputValue", value: e.target.value }]));
  };
  return (
    <>
      <Input.TextArea
        onKeyPress={onKeyPress}
        // onKeyDown={onKeyDown}
        onChange={onChange}
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
