import ButtonGrid from "../component/ButtonGrid";

const Keypad = () => {
  return (
    <>
      <ButtonGrid buttonItems={["C", "()", "%", "÷"]} />
      <ButtonGrid buttonItems={["7", "8", "9", "X"]} />
      <ButtonGrid buttonItems={["4", "5", "6", "-"]} />
      <ButtonGrid buttonItems={["1", "2", "3", "+"]} />
      <ButtonGrid buttonItems={["+/-", "0", ".", "="]} />
    </>
  );
};

export default Keypad;
