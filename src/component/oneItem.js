const OneItem = ({ items, key, id, onDelete, border }) => {
  return (
    <h3 className = {`${border && "border"}`}
      onDoubleClick={onDelete}
      key={key}
      style={{ backgroundColor: "#777", padding: "8px", margin: "1rem 0" }}
    >
      {items} <span style={{ color: "#fff" }}> ID:{id} </span>
    </h3>
  );
};

export default OneItem;
