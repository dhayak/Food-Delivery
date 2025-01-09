import React, { useContext, useState } from 'react';
import './Cart.css';
import { Storecontext } from '../../Context/Storecontext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(Storecontext);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const navigate = useNavigate();

  const handlePromoCode = () => {
    if (promoCode === 'SAVE10') {
      setDiscount(0.1 * getTotalCartAmount());
    } else {
      alert('Invalid Promo Code');
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Object.keys(cartItems).length === 0 || getTotalCartAmount() === 0 ? (
          <p className="empty-cart">Your cart is empty. Start adding items!</p>
        ) : (
          food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹ {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹ {item.price * cartItems[item._id]}</p>
                    <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50 - discount}</b>
            </div>
          </div>
          <button 
            onClick={() => navigate('/order')} 
            disabled={getTotalCartAmount() === 0}
          >
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input 
                type="text" 
                placeholder="Promo Code" 
                value={promoCode} 
                onChange={(e) => setPromoCode(e.target.value)} 
              />
              <button onClick={handlePromoCode}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
