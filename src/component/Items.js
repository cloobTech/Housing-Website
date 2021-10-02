import OneItem from "./oneItem";

const Items = ({addItems, onDelete, border}) =>{
    return (
       <>
       { addItems.map((eachItem) => (<OneItem onDelete = {onDelete} border = {border} id = {eachItem.id} key = {eachItem.id} items = {eachItem.text}/>))}
       
       </>
    )
}

export default Items;