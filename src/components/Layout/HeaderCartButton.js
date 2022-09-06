import {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Cart-Context";

const HeaderCartButton=props => {
 const carCtx=useContext(CartContext)
 const numberOfCartItems=carCtx.items.reduce((curNumber,item) => {return curNumber+item.amount},0)

 return (
  <button className=
   {classes.button} onClick={props.onClick}>
   <span className={classes.icon}>
    <CartIcon />
   </span>
   <span>Your Cart</span>
   <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
 )
}
export default HeaderCartButton