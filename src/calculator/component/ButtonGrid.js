import { useDispatch } from "react-redux";
import { actions } from "../state";
const ButtonGrid = ({ buttonItems }) => {
  const dispatch = useDispatch();
  const buttonClick = ({ target: { value } }) => {
    console.log(value);
    dispatch(actions.setInputValue(value));
  };
  return (
    <div>
      {buttonItems.map((item) => (
        <button onClick={buttonClick} value={item} key={item}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
