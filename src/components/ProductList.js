

import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import api from '../api'
import { getProducts } from '../api';
import '../Styles/ProductList.css';

function ProductList()
{
    const[data,setData]=useState([])
    const[chargement,setchargement] =useState(true)
    const API_URL = 'http://localhost:3000/api/products';
    

  const getProducts = async ()=>{
    const product=await axios.get('http://localhost:3000/api/products')
    console.log(product.data.data)
    setData(product.data.data)

    setchargement(false)
}

useEffect(()=>{
   getProducts()
},[]
)

return (
  <>
    {chargement ? (
      <h2>Chargement...</h2>
    ) : (
      <div>
        <div className="container">
          <h2>Product List</h2>
          {data.map((product) => (
            <div key={product._id} className="card mb-3">
              <img src={product.image} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </>
);

};
  
export default ProductList;



      // function ProductList() {
//   const [products, setProducts] = useState([]);
//   const[chargement,setchargement] = useState(true)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getProducts();
//         setProducts(response.data); // Adjust the response data handling
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);


// import React, { useEffect, useState } from 'react';
// import { getProducts } from '../api'; // Import the API function
// import '../Styles/ProductList.css'; 

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getProducts();
//         setProducts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h2>Product List</h2>
//       {products.map((product) => (
//         <div key={product._id} className="card mb-3">
//           <div className="card-body">
//             <h5 className="card-title">{product.name}</h5>
//             <p className="card-text">{product.description}</p>
//             <p className="card-text">Price: {product.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
