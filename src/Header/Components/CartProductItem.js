import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import "./CartProductItem.css";
import { useState } from "react";

const CartProductItem = (props) => {
  const [updateditems, seUpdatedtItems] = useState({
    Id: props.id,
    Name: props.name,
    Amount: props.amount,
    Srcpath: props.srcpathh,
  });

  var price = updateditems.Amount;
  const [count, setCount] = useState(1);
  const [pricechange, setPricechange] = useState(price);
  const cartcountdeletehandler = () => {
    if (count >= 1) {
      setCount(count - 1);
      setPricechange(price * (count - 1));
      props.ontotalpricevaluehandler(-props.amount);
    }
  };
  const cartcountaddhandler = () => {
    setCount(count + 1);
    setPricechange(price * (count + 1));
    props.ontotalpricevaluehandler(props.amount);
  };
  const passremoveitem = () => {
    props.onremoveitems(props.name);
    seUpdatedtItems({
      Id: props.id,
      Name: props.name,
      Amount: props.amount,
      Srcpath: props.srcpathh,
    });
  };

  return (
    <div className="cartproductItemcont">
      <div className="carproditemimg">
        <img src={updateditems.Srcpath}></img>
      </div>
      <div className="cartproddetails">
        <div className="cartproditemnametxt">{updateditems.Name}</div>
        <div className="cartproditemamounttxt">{updateditems.Amount}</div>
        <button className="cartprodremovebutontxt" onClick={passremoveitem}>
          <span>
            <MdOutlineDelete size="18px" color="#C14086" />
          </span>
          <span>Remove</span>
        </button>
      </div>
      <div className="cartproductaddbutton">
        <div className="cartbuttonadd">
          <button onClick={cartcountdeletehandler}>
            <MdDelete />
          </button>
          <span>{count}</span>
          <button onClick={cartcountaddhandler}>
            <GrAdd />
          </button>
        </div>
      </div>
      <div className="cartproducttotalamt">
        <span>Rs{pricechange}</span>
      </div>
    </div>
  );
};

export default CartProductItem;
