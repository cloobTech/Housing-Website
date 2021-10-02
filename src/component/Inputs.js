
const Inputs = ({value, onChange}) => {


  return (
    <input
      style={{
        width: "100%",
        padding: "8px",
        border: "none",
        borderRadius: "4px",
      }}

      value = {value}
      onChange = {onChange}
    />
  );
};

export default Inputs;
