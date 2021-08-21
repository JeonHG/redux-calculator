import { useDispatch, useSelector } from "react-redux";
import { actions, getState } from "../state";
import { message } from "antd";
import { useEffect } from "react";

const Message = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => getState(state));
  useEffect(() => {
    if (errorMessage) {
      message.warn(
        "유효하지 않은 수식입니다.",
        [1],
        dispatch(actions.setValues([{ key: "errorMessage", value: "" }]))
      );
    }
  }, [errorMessage]);
  return <></>;
};

export default Message;
