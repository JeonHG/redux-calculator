import { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";
import { getState } from "../state";

const Display = () => {
  const { inputValue } = useSelector((state) => getState(state));
  const [result, setResult] = useState("");
  const onTextAreaChange = ({ target: { value } }) => {
    console.log(value);
    setResult(value);
  };
  return (
    <>
      <Input.TextArea
        onChange={onTextAreaChange}
        className="textarea-input"
        bordered={false}
        autoSize={{ minRows: 3 }}
        value={inputValue}
      />
      <div>result: {result ? result : 0}</div>
    </>
  );
};

export default Display;
