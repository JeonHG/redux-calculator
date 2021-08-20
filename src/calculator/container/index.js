import { useSelector } from "react-redux"
import { getState } from "../state"
import Output from "../component/Output"
import Keypad from "../component/Keypad"
import Toolbar from "../component/Toolbar"

const Calculator = () => {
  const {isLoading} = useSelector((state) => getState(state))
  console.log(isLoading)
  return (
    <div className="calculator">
      <Output />
      <Toolbar />
      <Keypad />
    </div>
  )
}

export default Calculator