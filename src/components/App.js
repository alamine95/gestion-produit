import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from 'uuidv4';
import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Header from './Header';
import ProductDetail from './ProductDetail';

function App() {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setproducts] = useState([]);

  const AddProductHandler = (product) => {
    console.log(product);
    setproducts([...products, {id: uuid(), ...product }]);
  }

  const removeproductHandler = (id) => {
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });

    setproducts(newProductList);
  }

  useEffect(() => {
    const retriveproducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveproducts) setproducts(retriveproducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
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

          <Route path="/product/:id" component={ProductDetail}/>
            
          </Switch>
        </Router>
      
      
    </div>
  );
}

export default App;
