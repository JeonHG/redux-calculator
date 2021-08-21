import { useDispatch } from "react-redux";
import { actions, getState } from "../state";

const ButtonGrid = ({ buttonItems }) => {
  const dispatch = useDispatch();
  const numClick = ({ target: { value } }) => {
    dispatch(actions.setInputValue(value));
  };
  const utilClick = ({ target: { value } }) => {
    switch (value) {
      case "C":
        dispatch(actions.initState());
        break;
      case "=":
        dispatch(actions.evaluate());
        break;
      case "X":
        dispatch(actions.setInputValue("*"));
        break;
      case "÷":
        dispatch(actions.setInputValue("/"));
        break;
      case "이전":
        console.log("이전");
        break;
      case "지우기":
        dispatch(actions.erase());
        break;
      default:
        dispatch(actions.setInputValue(value));
    }
  };
  return (
    <div className="button-grid">
      {buttonItems.map(({ value, type }) => (
        <button
          className={type == "toolbar" ? "button-toolbar" : "button-dial"}
          onClick={type == "num" ? numClick : utilClick}
          value={value}
          key={value}
        >
          {value}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
