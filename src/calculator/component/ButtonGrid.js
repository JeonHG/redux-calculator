import { useDispatch } from "react-redux";
import { actions, getState } from "../state";

const ButtonGrid = ({ buttonItems }) => {
  const dispatch = useDispatch();
  const numClick = ({ target: { value } }) => {
    document.getElementById("input-panel").focus();
    dispatch(actions.setInputValue(value));
  };
  const utilClick = ({ target: { value } }) => {
    document.getElementById("input-panel").focus();
    switch (value) {
      case "C":
        dispatch(
          actions.setValues([
            { key: "inputValue", value: "" },
            { key: "outputValue", value: "0" },
          ])
        );
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
      case "()":
        dispatch(actions.toggleParenthesesOpen());
        break;
      case "이전":
        dispatch(actions.toggleInputMode());
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
