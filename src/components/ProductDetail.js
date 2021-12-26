import React from 'react';
import {  Link } from "react-router-dom";

const ProductDetail = (props) => {
    const { nom, prix, description} = props.location.state.product;
    return (
        
        <div className="container"> 

        <div className="card mt-3" style={{width: "50rem"}}>
            <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-text">Nom: {nom}</h2>
                <h5 className="card-text">Prix: {prix}</h5>
                <p className="card-text">Description {description}</p>
            </div>
            
        </div>

        <div className="container mt-3 center">
                <Link to="/"><button className="btn btn-primary">Retour au produit</button></Link>
        </div>
        </div>
    );
};

export default ProductDetail;