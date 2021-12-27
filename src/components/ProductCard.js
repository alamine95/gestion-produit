import React from 'react';
import {  Link } from "react-router-dom";

const ProductCard = (props) => {
    const { id, nom, prix, description } = props.product;
    return (
        
      <div class="card rounded shadow-sm border-0 mt-5">
        <div class="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt="" class="img-fluid d-block mx-auto mb-3"/>
            <Link to={{ pathname:`/product/${id}`, state:{product: props.product}}}>
              <h5> <a href="#" class="text-dark">Nom: {nom}</a></h5>
              <p class="small text-muted font-italic">Description: {description}</p>
              <p class="small text-muted font-italic">Prix: {prix} FCFA</p>
            </Link>
            <i className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px" }}
            onClick={() => props.clickHander(id)}
            ></i>

            <Link to={{ pathname:`/edit`, state:{product: props.product}}}>
              <i className="edit alternate outline icon"
              style={{ color: "blue", marginTop: "7px" }}
              ></i>
            </Link>
          
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    );
};

export default ProductCard