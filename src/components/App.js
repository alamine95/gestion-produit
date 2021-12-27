import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from 'uuidv4';
import api from '../api/products';
import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Header from './Header';
import ProductDetail from './ProductDetail';
import EditProduct from './EditProduct';

function App() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setproducts] = useState([]);

  //Retriveproducts
  const retriveProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  }

  const AddProductHandler = async (product) => {
    console.log(product);
    const request = {
      id: uuid(),
      ...product,
    };

    const response = await api.post("/products", request);
    setproducts([...products, response.data]);
  }

  const updateProductHandler = async (product) => {
    const response = await api.put(`/products/${product.id}`, product);
    const { id, nom, prix, description } = response.data;
    setproducts(
      products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeproductHandler = async (id) => {
    await api.delete(`/products/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });

    setproducts(newProductList);
  }

  useEffect(() => {
    // const retriveproducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveproducts) setproducts(retriveproducts);
    const getAllProducts = async () => {
      const allProducts = await retriveProducts();
      if (allProducts) setproducts(allProducts);
    };

    getAllProducts();

  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  return (
    <div >
      <Header/>
        <Router>
          <Switch>

          <Route
           path="/"
           exact
            render={(props) => (
            <ProductList {...props} products={products} getproductId={ removeproductHandler }/>
            )}
          />

          <Route
           path="/add"
           render={(props) => (
           <AddProduct {...props} AddProductHandler={AddProductHandler}/>
           )}
          />

          <Route
           path="/edit"
           render={(props) => (
           <EditProduct {...props} updateProductHandler={updateProductHandler}/>
           )}
          />    

          <Route path="/product/:id" component={ProductDetail}/>
            
          </Switch>
        </Router>
      
      
    </div>
  );
}

export default App;
