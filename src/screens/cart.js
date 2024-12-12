import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../app/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-page" style={{ padding: '40px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#95a5a6' }}>
          Your cart is empty. Start shopping now!
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                marginBottom: '15px',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
              }}
            >
              <div style={{ flex: 1, marginRight: '20px' }}>
                <h4 style={{ marginBottom: '10px', color: '#34495e' }}><u>{item.title}</u></h4>
                <p style={{ color: '#7f8c8d', fontSize: '18px' }}>Price: <strong>${item.price}</strong></p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  height: '120px',
                  width: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              />
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  marginLeft: '15px',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#c0392b')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#e74c3c')}
                onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
              >
                Remove Item
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
