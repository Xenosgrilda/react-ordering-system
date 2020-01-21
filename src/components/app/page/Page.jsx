import React from "react";
import './Page.css';
import Filter from "../filter/Filter";
import Products from "../products/Products";

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            productList: [
                {
                    name: 'Nvidia GTX 2080 Ti',
                    brand: 'Nvidia',
                    price: 4000.00,
                    imgSrc: 'rtx_2080_ti.jpg'
                },
                {
                    name: 'Aorus B450 Gaming',
                    brand: 'Aorus',
                    price: 899.00,
                    imgSrc: 'gigabyte_aorus.jpg'
                },
                {
                    name: 'Acer Aspire 5',
                    brand: 'Acer',
                    price: 3500.00,
                    imgSrc: 'acer-aspire-5.jpg'
                },
                {
                    name: 'Asus Rog Phone 2',
                    brand: 'Asus',
                    price: 3200.00,
                    imgSrc: 'asus_rog_phone_2.jpg'
                },                {
                    name: 'Gigabyte GTX 2060',
                    brand: 'Gigabyte',
                    price: 2000.00,
                    imgSrc: 'gigabyte_rtx_2060.jpg'
                },
                {
                    name: 'Samsung Galaxy A70',
                    brand: 'Samsung',
                    price: 2999.00,
                    imgSrc: 'galaxy_a70.jpg'
                }
            ]
        }
    };

    render() {
        return (
            <div className='kabum-page-container mt-4'>
                <Filter brands={['Samsung', 'Acer', 'Nvidia', 'Asus', 'Gigabyte']} />
                <Products header='Produtos' products={this.state.productList}/>
            </div>
        )
    }
}

