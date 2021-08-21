import ButtonGrid from "../component/ButtonGrid";

const Keypad = () => {
  return (
    <>
      <ButtonGrid
        buttonItems={[
          { value: "C", type: "util" },
          { value: "()", type: "util" },
          { value: "%", type: "util" },
          { value: "÷", type: "util" },
        ]}
      />
      <ButtonGrid
        buttonItems={[
          { value: "7", type: "num" },
          { value: "8", type: "num" },
          { value: "9", type: "num" },
          { value: "X", type: "util" },
        ]}
      />
      <ButtonGrid
        buttonItems={[
          { value: "4", type: "num" },
          { value: "5", type: "num" },
          { value: "6", type: "num" },
          { value: "-", type: "util" },
        ]}
      />
      <ButtonGrid
        buttonItems={[
          { value: "1", type: "num" },
          { value: "2", type: "num" },
          { value: "3", type: "num" },
          { value: "+", type: "util" },
        ]}
      />
      <ButtonGrid
        buttonItems={[
          { value: "", type: "num" },
          { value: "0", type: "num" },
          { value: ".", type: "util" },
          { value: "=", type: "util" },
        ]}
      />
    </>
  );
};

export default Keypad;
