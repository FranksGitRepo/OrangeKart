import ProductCard from "./ProductCard";
import './Productitems.css'
function ProductItems (props) {
    
    const  onsavecarthandler = (clkvalue,name,amt,img) => {
        console.log(clkvalue + "clkvalue" + name + amt + img)
        props.mpcartvalue(clkvalue,name,amt,img);
    }
    
    const veg = [
        {   id:1, Name: "Roma Tomato", Amount: 10,Srcpath:"./images/Tomato.jpg"},
        {   id:2, Name: "Potato", Amount: 10,Srcpath:"./images/Potato.jpg"},
        {   id:3,Name: "Onion",Amount: 15,Srcpath:"./images/Onion.jpg"},
        {   id:5,Name: "Radish",Amount: 12,Srcpath:"./images/Radish.jpg"},
        {   id:6,Name: "Carrot",Amount: 6,Srcpath:"./images/Carrot.jpg"},
        {   id:7,Name: "Garlic",Amount: 19,Srcpath:"./images/Garlic.jpg"},
        {   id:8,Name: "Ginger",Amount: 30,Srcpath:"./images/Ginger.jpg"},
        {   id:5,Name: "Radish",Amount: 12,Srcpath:"./images/Radish.jpg"},
        {   id:6,Name: "Carrot",Amount: 6,Srcpath:"./images/Carrot.jpg"},
        {   id:7,Name: "Garlic",Amount: 19,Srcpath:"./images/Garlic.jpg"},
        {   id:8,Name: "Ginger",Amount: 30,Srcpath:"./images/Ginger.jpg"},
    ]
    const fruits = [
        {   id:1, Name: "Apple", Amount: 180,Srcpath:"./images/Apples.jpg"},
        {   id:2, Name: "Banana", Amount: 30,Srcpath:"./images/Banana.jpg"},
        {   id:3,Name: "Grapes",Amount: 160,Srcpath:"./images/Grapes.jpg"},
        {   id:5,Name: "Papaya",Amount: 40,Srcpath:"./images/Papaya.jpg"},
        {   id:6,Name: "Kiwi",Amount: 80,Srcpath:"./images/Kiwi.jpg"},
        {   id:7,Name: "Promogranet",Amount: 45,Srcpath:"./images/Promogranite.jpg"},
    ]
    if(props.name =="Veg"){
        return (
            <div className="productslist">
                {veg.map(itemss => <ProductCard name = {itemss.Name} amount = {itemss.Amount} srcpathh = {itemss.Srcpath} onsavecartvalue = {onsavecarthandler}/>)}
            </div>
        )
            
    }
    else{
        return (
            <div className="productslist">
                {fruits.map(itemss => <ProductCard name = {itemss.Name} amount = {itemss.Amount} srcpathh = {itemss.Srcpath} onsavecartvalue = {onsavecarthandler}/>)}
            </div>
            
        )

    }
    
}
export default ProductItems;