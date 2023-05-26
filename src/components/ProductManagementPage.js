import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Component for updating a product
function UpdateProduct({ productId, onUpdate }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Function to update the product
  const updateProduct = async () => {
    try {
      const response = await axios.put(`/api/products/${productId}`, {
        name,
        price,
        description,
      });
      // Call the onUpdate function provided as prop to notify the parent component
      onUpdate(response.data.data);
      // Reset the input fields
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  return (
    <div>
      {/* Input field for name */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
      {/* Input field for price */}
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="form-control"
      />
      {/* Input field for description */}
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control"
      />
      {/* Button to trigger the updateProduct function */}
      <button type="button" onClick={updateProduct} className="btn btn-primary">
        Update
      </button>
    </div>
  );
}

// Main component for product management
function ProductManagement() {
  const [products, setProducts] = useState([]); // State for storing products
  const [name, setName] = useState(''); // State for name input field
  const [price, setPrice] = useState(''); // State for price input field
  const [description, setDescription] = useState(''); // State for description input field
  const [data, setData] = useState([]); // State for the fetched product data
  const [loading, setLoading] = useState(true); // State to indicate loading status

  // Fetch products on component mount
  useEffect(() => {
    getProducts();
  }, []);

  // Function to fetch products from the server
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // Function to create a new product
  const createProduct = async () => {
    try {
      const response = await axios.post('/api/products', {
        name,
        price,
        description,
      });
      setProducts([...products, response.data.data]);
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Failed to create product:', error);
    }
  };

  // Function to update a product in the state
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  // Function to delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  // Render loading state if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="content-container">
        <h2>Product Management</h2>
        <form>
          <div className="row">
            {/* Input field for name */}
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            {/* Input field for price */}
            <div className="col-md-3">
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
              />
            </div>
            {/* Input field for description */}
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
            </div>
            {/* Button to trigger the createProduct function */}
            <div className="col-md-2">
              <button
                type="button"
                onClick={createProduct}
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </div>
        </form>
        {/* Table to display the product data */}
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  {/* Render the UpdateProduct component with product ID and updateProduct function */}
                  <UpdateProduct
                    productId={product._id}
                    onUpdate={updateProduct}
                  />
                  {/* Button to trigger the deleteProduct function */}
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/admin">Go back</Link>
    </div>
  
  );
}

export default ProductManagement;
