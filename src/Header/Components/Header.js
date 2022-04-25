
import Navlinks from './Navlinks';
import './Header.css'
import Login from './Login';
import Cart from './Cart';
import {HiMenuAlt1} from 'react-icons/hi';
import {CgShoppingCart} from 'react-icons/cg';
import {CgClose} from 'react-icons/cg';
import img1 from './Frame.jpg';
import {FiSearch} from 'react-icons/fi'
import { useState } from 'react';
function Header(props) {
    console.log(props.caritemsarray)
    const [Deliveryborderchange,setdeliveryborderchange] = useState("none")
    const [pickupborderchange,setpickupborderchange] = useState("none")
    const [displaylogintf,setdisplaylogintf] = useState(false);
    const [displaycart,setdisplaycart] = useState(false);
        const deliveryactive = () => {
            setdeliveryborderchange("2px solid black")
            setpickupborderchange("none")
        }
        const pickupactive = () => {
            setpickupborderchange("2px solid black")
            setdeliveryborderchange("none")
        }
    const [navstate,setnavstate] = useState(false)
    const showNavlinks = () =>{
        if(navstate === false){
            setnavstate(true);
        }
        else{
            setnavstate(false);
            
        }
    
     }
     const onclickshownav = () => {
         setnavstate(false)
     }
     const displayLoginhandler = () => {
        setdisplaylogintf(!displaylogintf);
     }
     const discarthandler = () => {
         console.log(!displaycart)
         setdisplaycart(!displaycart);
     }
     console.log(displaycart)
     const getitemsremovedhandler = (x) => {
         props.getitemvalueremove(x);
         console.log(x)
     }
     
    return <div className='header'>
        {navstate || <button className='harburgerbutton' onClick={showNavlinks}>
            <HiMenuAlt1 className='hamburger' size="20px" color="black"/>
        </button> }
        {navstate && <button className='harburgerbutton' onClick={showNavlinks}>
            <CgClose className='hamburger' size="20px" color="black"/>
        </button> }
        
        
        {navstate && <div className='navbar'>
            <Navlinks onClick = {onclickshownav}></Navlinks>
        </div>} 
        <img src={img1} alt="OrangeKart" className='projectlogo'></img>
        <form className='searchcontainer'>
            <input type="text" className='Searchtext'></input>
            <div className='searchicon'>
                <FiSearch size="30px" color="black"/>
            </div>
        </form>
        <div className='toggle'>
            <button className='togglebutton' onClick={deliveryactive} style = {{border: Deliveryborderchange}}> Delivery</button>
            <button className='togglebutton' onClick={pickupactive} style = {{border: pickupborderchange}}>Pickup</button>
        </div>
        <button className='LoginbuttonHeader' onClick={displayLoginhandler}>
            <span className='LoginTextHeader'>Login</span>
        </button>
        <button className='cart' onClick={discarthandler}>
            <CgShoppingCart size="25px" color="white"/>
            <span className='carttext'>{props.cartqtyvalue}</span>
        </button>
        {displaylogintf && <Login onClick={displayLoginhandler}/>}
        {displaycart && <Cart onCloseCart={discarthandler} productitemsfrombody = {props.caritemsarray} getItemsremovedvalue={getitemsremovedhandler}/>}
        
        
    </div>
}
export default Header;