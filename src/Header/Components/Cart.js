import React, { useState } from 'react';
import {CgClose} from 'react-icons/cg';
import {FiChevronRight} from 'react-icons/fi'
import {MdVerified} from 'react-icons/md'
import CartProductItem from './CartProductItem';
import './Cart.css'

const Cart = (props) => {
    const [arrayproductitems,setArrayproductitems] = useState(props.productitemsfrombody)
    var updatedarray = [...props.productitemsfrombody]
    
    console.log(arrayproductitems)
    const removeitemshandler = (x) => {
        props.getItemsremovedvalue(x);
        console.log(x)
        for(let i=0;i<updatedarray.length;i++){
            if(updatedarray[i].Name==x){
                updatedarray=props.productitemsfrombody.filter(value=> x!=value.Name)
            }
        }
        setArrayproductitems(updatedarray);
        
    }
    var y = 0;
    // for(let i = 0;i<props.productitemsfrombody.length;i++){
    //     setArrayproductitems((previtemslist) =>{
    //         return [...previtemslist,{Name: props.productitemsfrombody[i].Name, Amount: props.productitemsfrombody[i].Amount, Srcpath: props.productitemsfrombody[i].Srcpath}]
    //       });
    // }
    
    for(let i = 0;i<arrayproductitems.length;i++){
        y = y+arrayproductitems[i].Amount;
    }
    const [totalprice, setTotalprice] = useState(y)
    const ontotalpricevaluehandler = (pricechange) =>{
        console.log(pricechange)
        setTotalprice((previtemslist) =>{
            return (previtemslist+pricechange)
          });
    }
    
    return (
       <div>
           <div className='backhidecart'></div>

           <div className='cartContainer'>
            <div className='onecartcontainer'>
                <div className='cartheading'>
                    <div className='Personaltxt'>Personal Cart</div>
                    <span className='Shoppingintxt'>Shopping in 560032</span>
                </div>
                <div className='closebuttoncart'>
                    <div>
                        <button className='exitbuttonincart' onClick={props.onCloseCart}>
                            <span className='cartclosesign'><CgClose size="22" color="#C14086"/></span>
                            <span className='cartclosetxt'>Close</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='backgroundcartcont'>
                <div className='secndcartcont'>   
                    <div className='scndcartshoptotal'>
                            <div className='secndimg'>
                                <img srcset="https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png, https://www.instacart.com/image-server/132x132/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 1.5x, https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 2x, https://www.instacart.com/image-server/264x264/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 3x, https://www.instacart.com/image-server/352x352/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 4x" alt="" class="css-1vskc0q-Header"/>

                            </div>
                            <div className='scndshopname'>
                                <div class="ShopNamee">Sprouts Farmers Market</div>
                                <div className='Nextpicktxt'>Next pickup: Ready by 10:00am</div>
                                <button className='satisbutton'>
                                    <div className='satisfaction'>
                                        <MdVerified className='verified' size="12px" color="blue"/>
                                        <p className='satistext'>100% satisfaction guarantee</p>
                                        <span className='lessarthansymbol'>
                                            <FiChevronRight size="12px" color="systemGrayscale30" margin-top="20px"/>
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div className='scndamount'>
                                    <div>Rs{totalprice}</div>
                            </div>
                    </div>
                    <hr className='scndcartseperator'></hr>
                    <div>
                        {arrayproductitems.map(items => <CartProductItem ontotalpricevaluehandler={ontotalpricevaluehandler} id={items.Id} name={items.Name} amount = {items.Amount} srcpathh = {items.Srcpath} onremoveitems={removeitemshandler}/>)}
                    </div>
                </div>
            </div>
                
        </div>

       </div>
    );
};

export default Cart;