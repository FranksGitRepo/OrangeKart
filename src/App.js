import './App.css';
import Sidebar from "./Body/Components/Sidebar";
import Header from './Header/Components/Header'
import Body from './Body/Components/Body';
import {useState} from 'react';
function App() {
  const [cartitemsqty,setCartitemsqty] = useState(0)
  const [cartitems,setCartitems] = useState([])
  const abmpcartvaluehandler = (x,name,amt,img) => {
    setCartitemsqty(x+cartitemsqty)
    console.log(cartitemsqty + name + amt + img)
    setCartitems((previtemslist) =>{
      return [...previtemslist,{Id: Math.random(), Name: name, Amount: amt, Srcpath: img}]
    });
    console.log(cartitems)
  }
  const getitemvalueremovehandler = (x) =>{
    console.log(x)
    for(let i=0;i<cartitems.length;i++){
      if(cartitems[i].Name==x){
        cartitems.splice(i,1);
      }
      setCartitems(cartitems);
      console.log(cartitems)
    }
  }
  return (
    <div className='app'>
      <Header cartqtyvalue = {cartitemsqty} caritemsarray={cartitems} getitemvalueremove={getitemvalueremovehandler}></Header>
      <div className='MainContent'>
        <div className="Sidebarinbody" id="idOfDiv" ><Sidebar/></div>
        <div className='Bodyy'><Body abmpcartvalue = {abmpcartvaluehandler}></Body></div>
      </div>
    </div>

    
  );
}

export default App;
