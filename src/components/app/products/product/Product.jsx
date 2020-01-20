import React from "react";
import './Product.css';

export default function Product(props) {
    return(
        <div className='kabum-product'>
            <div className="kabum-image-container">
                <img className='kabum-image' src={require('../../../../images/' + props.imgSrc)} alt={props.name}/>
            </div>
            <div className='kabum-product-content'>
                <div className="kabum-product-flex">
                    <h4>{props.name}</h4>
                    <span className='kabum-product-price'>R${props.price}</span>
                    <div className='row'>
                        <div className="col-12 mb-1">
                            <button className='btn btn-block btn-primary'>Comprar</button>
                        </div>
                        <div className="col-12">
                            <button className='btn btn-block btn-outline-dark'>Mais Detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
