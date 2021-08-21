import { useSelector } from "react-redux";
import { getState } from "../state";

const History = () => {
  const { resultsList } = useSelector((state) => getState(state));
  return (
    <div className="history-div">
      {resultsList.map(({ expression, result }) => (
        <>
          <div className="history-expression">{expression}</div>
          <div className="history-result">= {result}</div>
        </>
      ))}
    </div>
  );
};

export default History;
