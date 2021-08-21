import { ClockCircleFilled, CaretLeftFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { actions } from "../state";

const Toolbar = () => {
  const dispatch = useDispatch();
  const history = () => {
    document.getElementById("input-panel").focus();
    dispatch(actions.toggleInputMode());
  };
  const erase = () => {
    document.getElementById("input-panel").focus();
    dispatch(actions.erase());
  };

  return (
    <div className="button-grid">
      <ClockCircleFilled className="button-toolbar" onClick={history} />
      <CaretLeftFilled className="button-toolbar" onClick={erase} />
    </div>
  );
};

export default Toolbar;
