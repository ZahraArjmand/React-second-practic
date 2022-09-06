import {useState} from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';
function App() {
  const [IsShownCart,SetIsShownCart]=useState(false)
  const ShownCart=() => {
    SetIsShownCart(true)
  }
  const hideCart=() => {
    SetIsShownCart(false)
  }
  return (
    <CartContextProvider>
      {IsShownCart&&< Cart onHide={hideCart} />}
      <Header onShown={ShownCart} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
