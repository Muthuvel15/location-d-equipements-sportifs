import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import '../Styles/ProductList.css';

function ProductList() {
  const [data, setData] = useState([]);
  const [chargement, setChargement] = useState(true);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:3000/api/products');
    console.log(response.data.data);
    setData(response.data.data);
    setChargement(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (productId) => {
    const selectedProduct = data.find((product) => product._id === productId);
    if (selectedProduct) {
      const updatedCartItems = [...cartItems, selectedProduct];
      setCartItems(updatedCartItems);
      console.log(`Product added to cart: ${productId}`);
    }
  };

  const handleViewCart = () => {
    navigate('/cart', { state: { cartItems: cartItems } }); // Navigate to '/cart' and pass cartItems as state
  };

  return (
    <>
      {chargement ? (
        <h2>Chargement...</h2>
      ) : (
        <div>
          <div className="container">
            <h2>Product List</h2>
            <div className="card-grid row">
              {data.map((product) => (
                <div key={product._id} className="card small-card">
                  <img src={product.image} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Price: {product.price}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product._id)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary" onClick={handleViewCart}>
              View Cart
            </button>
            {/* Pass the cartItems prop to the Cart component */}
            <Cart cartItems={cartItems} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
