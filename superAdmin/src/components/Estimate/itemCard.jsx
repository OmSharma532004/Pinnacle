import React from 'react';

const ItemCard = ({ item, onAddToCart, onRemoveFromCart, isSelected }) => {
    return (
        <div style={{ border: '1px solid gray', padding: 10, margin: 5, textAlign: 'center' }}>
            <h3>{item.name} - ₹{item.price}</h3>
            <p>{item.description}</p>
            {isSelected ? (
                <button onClick={onRemoveFromCart} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', cursor: 'pointer' }}>
                    Remove
                </button>
            ) : (
                <button onClick={onAddToCart} style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', cursor: 'pointer' }}>
                    Add to Cart
                </button>
            )}
        </div>
    );
};

export default ItemCard;
