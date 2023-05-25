import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/ProductList.css'; 

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product._id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">Price: {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
