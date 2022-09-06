import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";


const Cart=props => {

 const cartCtx=useContext(CartContext)

 const cartItemRemoveHandler=id => {
  cartCtx.removeItem(id)
 }
 const cartItemAddHandler=item => {
  cartCtx.addItem({...item,amount: 1})
 }


 const IsOrdering=cartCtx.items.length>0


 const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`

 const cartItems=(<ul className={classes['cart-items']}>
  {cartCtx.items.map(item => (<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />))

  }
 </ul>

 );
 return (
  <Modal onClick={props.onHide}>

   {cartItems}
   <div className={classes.total}>
    <span>total Amount</span>
    <span>{totalAmount}</span>
   </div>
   <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
    {IsOrdering&&<button className={classes.button}>Order</button>}
   </div>
  </Modal>
 )
}
export default Cart
