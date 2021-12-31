import React from 'react';
import {  Link } from "react-router-dom";
import ProductCard from './ProductCard';

const ProductList = (props) => {
    const deleteProductHandler = (id) => {
        props.getproductId(id);
    };

    const renderProductList = props.products.map((product) => {
        return (
            <ProductCard product={product} clickHander={deleteProductHandler} key={product.id}/>
        );
    })

    return (
        <div>

            <div className="container mt-5">
                <div>
                    <div className="row">
                        <div className="col">
                        <h2>Produit List</h2>
                        </div>
                        <div className="col">
                        <Link to="/add"><button className="btn btn-primary">Add Produit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    
                    {renderProductList}
                
                </div>
            </div>
                    
            

        </div>
    );
};

export default ProductList