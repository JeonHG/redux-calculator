import { useDispatch } from "react-redux";
import { actions, getState } from "../state";

const ButtonGrid = ({ buttonItems }) => {
  const dispatch = useDispatch();
  const numClick = ({ target: { value } }) => {
    console.log(value);
    dispatch(actions.setInputValue(value));
  };
  const utilClick = ({ target: { value } }) => {
    console.log(value);
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
      default:
        dispatch(actions.setInputValue(value));
    }
  };
  return (
    <div>
      {buttonItems.map(({ value, type }) => (
        <button
          className="button-dial"
          onClick={type == "util" ? utilClick : numClick}
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
