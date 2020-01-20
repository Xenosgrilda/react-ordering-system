import React from "react";
import './Products.css';
import Product from "./product/Product";

export default function Products(props) {

    return(
        <div className='kabum-page-products'>
            <h2>{props.header}</h2>
            <hr className='kabum-separator'/>

            <div className='kabum-page-products-container'>
                { props.products.map( prod => <Product name={prod.name} price={prod.price} imgSrc={prod.imgSrc}/> ) }
            </div>
        </div>
    )
}
