import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { actions, getState } from "../state";
import { useEffect, useRef } from "react";

const Display = () => {
  const dispatch = useDispatch();
  const textAreaRef = useRef();
  const { inputValue, outputValue, cursorLocation } = useSelector((state) =>
    getState(state)
  );
  useEffect(() => {
    textAreaRef.current.resizableTextArea.textArea.selectionStart =
      cursorLocation;
    textAreaRef.current.resizableTextArea.textArea.selectionEnd =
      cursorLocation;
    textAreaRef.current.focus();
  }, [cursorLocation]);
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      dispatch(actions.evaluate());
    }
  };
  const onCursorChange = (e) => {
    dispatch(
      actions.setValues([
        { key: "cursorLocation", value: e.target.selectionStart },
      ])
    );
  };
  const onChange = (e) => {
    dispatch(actions.setValues([{ key: "inputValue", value: e.target.value }]));
  };
  return (
    <>
      <Input.TextArea
        onMouseUp={onCursorChange}
        onKeyPress={onKeyPress}
        onKeyUp={onCursorChange}
        onChange={onChange}
        className="textarea-input"
        bordered={false}
        autoSize={{ minRows: 3 }}
        value={inputValue}
        autoFocus
        id="input-panel"
        ref={textAreaRef}
      />
      <div className="output">{outputValue}</div>
    </>
  );
};

export default Display;
