import { useState } from "react/cjs/react.development";
import Button from "./component/Button";
import Card from "./component/Card";
import Inputs from "./component/Inputs";
import Items from "./component/Items";

const App = () => {
  const [items, setItems] = useState("");
  const [addItems, setAddItems] = useState([]);
  const [border, setBorder] = useState(false);

  const itemHandler = (e) => {
    setItems(e.target.value);
  };

  const deleteHandler = (e) =>{
    if (border === false){
      setBorder(true)
    }
    else{
      setBorder(false)
    }
  }

  const addItem = (id) => {
    if (items === ""){
      return
    }
    setAddItems([...addItems, { text: items, id: Math.round(Math.random() * 10) }]);
    setItems ("");

    console.log(id)

  };

  window.onkeydown = (e) =>{
if (e.key === "Enter"){
  addItem()
}
  }

  return (
    <Card>
      <Inputs onChange={itemHandler} value={items} />
       <Items border = {border} onDelete = {deleteHandler} addItems={addItems}/>
      <Button onClick={addItem} bg="greenyellow" color="#000" name="ADD ITEM" />
    </Card>
  );
};

export default App;
