import {useReducer} from "react";
import CartContext from "./Cart-Context";
const defaultCartState={
 items: [],
 totalAmount: 0
}
const cartReducer=(state,action) => {
 if(action.type==="ADD_ITEM") {
  const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount
  const existingCartItemIndex=state.items.findIndex((item) => item.id===action.item.id)
  const existingCartItem=state.items[existingCartItemIndex]
  let updatedItems
  let updatedItem
  if(existingCartItem) {
   updatedItem={
    ...existingCartItem,
    amount: existingCartItem.amount+action.item.amount
   }
   updatedItems=[...state.items]
   updatedItems[existingCartItemIndex]=updatedItem
  } else {
   updatedItems=state.items.concat(action.item)
  }
  return {
   items: updatedItems,
   totalAmount: updatedTotalAmount
  }
 }

 if(action.type==="REMOVE_ITEM") {
  console.log("t")
  const existingCartItemIndex=state.items.findIndex((item) => item.id===action.id)
  console.log(existingCartItemIndex)
  const existingItem=state.items[existingCartItemIndex]
  const updatedTotalAmount=state.totalAmount-existingItem.price

  let updatedItems;
  if(existingItem.amount===1) {
   updatedItems=state.items.filter(item => item.id!==action.id)
  } else {
   const updatedItem={...existingItem,amount: existingItem.amount-1}
   updatedItems=[...state.items]
   updatedItems[existingCartItemIndex]=updatedItem
  }
  return {
   items: updatedItems,
   totalAmount: updatedTotalAmount
  }
 }
 return defaultCartState
}

const CartContextProvider=props => {

 const [state,dispatchCartAction]=useReducer(cartReducer,defaultCartState)

 const addItemToCartHandler=item => {
  dispatchCartAction({type: "ADD_ITEM",item: item})
 }
 const RemoveItemFromCartHandler=id => {
  dispatchCartAction({type: "REMOVE_ITEM",id: id})
 }
 const cartContext={
  items: state.items,
  totalAmount: state.totalAmount,
  addItem: addItemToCartHandler,
  removeItem: RemoveItemFromCartHandler
 }
 return (
  <CartContext.Provider value={cartContext}>
   {props.children}
  </CartContext.Provider>

 )
}
export default CartContextProvider