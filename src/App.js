import "./App.css";
import Sidebar from "./Body/Components/Sidebar";
import Header from "./Header/Components/Header";
import Body from "./Body/Components/Body";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [cartitemsqty, setCartitemsqty] = useState(0);
  const [cartitems, setCartitems] = useState([]);
  const abmpcartvaluehandler = (x, name, amt, img) => {
    setCartitemsqty(x + cartitemsqty);
    setCartitems((previtemslist) => {
      return [
        ...previtemslist,
        { Id: Math.random(), Name: name, Amount: amt, Srcpath: img },
      ];
    });
  };
  const getitemvalueremovehandler = (x) => {
    for (let i = 0; i < cartitems.length; i++) {
      if (cartitems[i].Name == x) {
        cartitems.splice(i, 1);
      }
      setCartitems(cartitems);
    }
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Header
          cartqtyvalue={cartitemsqty}
          caritemsarray={cartitems}
          getitemvalueremove={getitemvalueremovehandler}
        />
        <div className="MainContent">
          <div className="Sidebarinbody" id="idOfDiv">
            <Sidebar />
          </div>
          <div className="Bodyy">
            <Body abmpcartvalue={abmpcartvaluehandler} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
