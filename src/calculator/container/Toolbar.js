import ButtonGrid from "../component/ButtonGrid";

const Toolbar = () => {
  return (
    <ButtonGrid
      buttonItems={[
        { value: "이전", type: "toolbar" },
        { value: "지우기", type: "toolbar" },
      ]}
    />
  );
};

export default Toolbar;
