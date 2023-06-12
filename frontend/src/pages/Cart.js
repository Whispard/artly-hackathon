import React, { useEffect, useState } from 'react';
import { baseUrl } from '../apiConfig';
import { getHeaders } from '../authUtil.js';

const CartComponent = () => {
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {

      try {

        const response = await fetch(`${baseUrl}/api/arts/cart/`, {
          method: 'GET',
          headers: getHeaders(),
        });

        if (response.ok) {
          const cartData = await response.json();
          setCartItems(cartData);
        } else {
          throw new Error('Failed to fetch cart items');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartItems();
  }, []);

  const removeItemFromCart = async (itemId) => {

    try {

      const response = await fetch(`${baseUrl}/api/arts/${itemId}/remove-from-cart/`, {
        method: 'DELETE',
        headers: getHeaders(),
      });

      if (response.ok) {
        // Item removed successfully, update the cart
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
      } else {
        throw new Error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/arts/buy/`, {
        method: 'POST',
        headers: getHeaders(),
      });

      if (response.ok) {
        // Purchase successful, perform necessary actions
        // e.g., display a success message, redirect to order confirmation page, etc.
        console.log('Purchase successful!');
      } else {
        throw new Error('Failed to make the purchase');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!cartItems) {
    return <div>Loading Cart Items...</div>;
  }

  return (
    <>
      <div class="row m-3">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) :
          (

            cartItems.map(item => (
              <div class="col-sm-3 mb-sm-6 mt-5">
                <div class="card">
                  <div class="card-body" key={item.id}>
                    <img src={baseUrl + item.image} alt={item.title} style={{ width: '100px' }} class="card-img-top" />
                    <h3 class="card-title">{item.title}</h3>
                    {/* <p class="card-text">Artist: {artwork.artist}</p> */}
                    <p class="card-text">Description: {item.description}</p>
                    <p class="card-text">Price: ${item.price}</p>
                    <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))

          )}
          <button
                      className="btn btn-primary mt-3"
                      onClick={handleBuy}
                      class="btn btn-primary">Buy
                    </button>
      </div>

    </>

  );
};

export default CartComponent;
