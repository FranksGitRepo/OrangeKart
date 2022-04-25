import './ProductCard.css';
import {GrAdd} from 'react-icons/gr';
import {MdDelete} from 'react-icons/md';
import {useState} from 'react'
import userEvent from '@testing-library/user-event';
function ProductCard(props) {
    var initialcount = 0;
    var addtext = "Add";
    const [addtextt,setaddtextt] = useState("Add")
    //alert(props.items[0].Srcpath)
    const [displayaddbuttonafterhover, setaddbuttonafterhover] = useState(false)
    const [displayaddbutton, setaddbutton] = useState(true);
    const [cartCountvalue,setCartCountValue] = useState(initialcount);
    const [cartvalue,setCartValue] = useState(0)
    const mouseHover = () => {
        setaddtextt("Add to cart")
        
    }
    const mousehoveredout = () => {
        setaddtextt("Add")
        
    }
    console.log( props.name + addtext);
    const onAddButtonClicked = () => {
        setCartCountValue(cartCountvalue + 1)   
        setaddbutton(false)
        setaddbuttonafterhover(true)
        setCartValue(cartvalue + 1)
        props.onsavecartvalue(cartvalue + 1, props.name, props.amount, props.srcpathh )
    }
    const increaseCartCount = () =>{
        setCartCountValue(cartCountvalue + 1)

    }
    const dicreaseCartCount = () => {
        if(cartCountvalue <=0){
            setaddtextt("Add")
            setaddbuttonafterhover(false)
            setaddbutton(true)
        }
        else{
            setCartCountValue(cartCountvalue - 1)
        }
        
    }
    console.log(cartCountvalue);
    
    return(
        <div className='CardContainer'>
            <div className='prodimg'>
                <img src={props.srcpathh}></img>
                {displayaddbutton && <button className='addbutton' onMouseOver={mouseHover} onMouseOut={mousehoveredout} onClick={onAddButtonClicked}>
                    <span className='addsymbol'><GrAdd size="16px" color="black"/></span>
                    <span className='addtextbutton'>{addtextt}</span>
                </button>}
                {displayaddbuttonafterhover && <div className='addbuttonafterhover'>
                    <button className='addsymbolafterhover' onClick={dicreaseCartCount}><MdDelete size="16px" color="black"/></button>
                    <span className='valuecart'>{cartCountvalue}</span>
                    <button className='addsymbolafterhover' onClick={increaseCartCount}><GrAdd size="16px" color="black"/></button>
                </div>}
            </div>
            <div className='prodamtdes'>
                <span className='amountt'>Rs{props.amount}</span>
                <div className='proddesc'>{props.name}</div>
            </div>
            
        </div>
    )
}
export default ProductCard;