import "./ProductCard.css";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

function ProductCard({
  name,
  amount,
  srcpath,
  onsavecartvalue,
  setVeg,
  product,
  setFruits,
}) {
  var initialcount = product?.qty;
  const [addtextt, setaddtextt] = useState("Add");
  //alert(items[0].Srcpath)
  const [displayaddbuttonafterhover, setaddbuttonafterhover] = useState(false);
  const [displayaddbutton, setaddbutton] = useState(true);
  const [cartCountvalue, setCartCountValue] = useState(initialcount);
  const [cartvalue, setCartValue] = useState(0);
  const valueExceededInventory =
    cartCountvalue >= product?.inventory ? true : false;
  const mouseHover = () => {
    setaddtextt("Add to cart");
  };
  const mousehoveredout = () => {
    setaddtextt("Add");
  };
  const onAddButtonClicked = () => {
    if (!valueExceededInventory) {
      setCartCountValue(cartCountvalue + 1);
      setaddbutton(false);
      setaddbuttonafterhover(true);
      setCartValue(cartvalue + 1);
      onsavecartvalue(cartvalue + 1, name, amount, srcpath);
    }
  };
  const increaseCartCount = () => {
    if (!valueExceededInventory) setCartCountValue(cartCountvalue + 1);
  };
  const dicreaseCartCount = () => {
    if (cartCountvalue <= 0) {
      setaddtextt("Add");
      setaddbuttonafterhover(false);
      setaddbutton(true);
    } else {
      setCartCountValue(cartCountvalue - 1);
    }
  };

  return (
    <div className="CardContainer">
      <div className="prodimg">
        <img src={srcpath} alt="" />
        {displayaddbutton && (
          <button
            disabled={cartvalue >= product?.inventory ? true : false}
            className="addbutton"
            onMouseOver={mouseHover}
            onMouseOut={mousehoveredout}
            onClick={onAddButtonClicked}
          >
            <span className="addsymbol">
              <GrAdd size="16px" color="black" />
            </span>
            <span className="addtextbutton">{addtextt}</span>
          </button>
        )}
        {displayaddbuttonafterhover && (
          <div className="addbuttonafterhover">
            <button className="addsymbolafterhover" onClick={dicreaseCartCount}>
              <MdDelete size="16px" color="black" />
            </button>
            <span className="valuecart">{cartCountvalue}</span>
            <button
              className={`addsymbolafterhover ${
                valueExceededInventory ? "disableAddButton" : null
              }`}
              onClick={increaseCartCount}
            >
              <GrAdd size="16px" color="black" />
            </button>
          </div>
        )}
      </div>
      <div className="prodamtdes">
        <span className="amountt">Rs{amount}</span>
        <div className="proddesc">{name}</div>
      </div>
    </div>
  );
}
export default ProductCard;
