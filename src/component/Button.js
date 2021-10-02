const Button = ({ name, bg, color,onClick, addItems }) => {
  return <button onClick = {() => onClick (addItems)} style={{ backgroundColor: bg, color: color }}>{name}</button>;
};

export default Button;

