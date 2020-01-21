import React from "react";
import './Page.css';

import Filter from "../filter/Filter";
import Products from "../products/Products";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { filterProducts, getProducts } from "../../../actions/products.action";

class Page extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const {products} = this.props;
        console.log(products);
    }

    getProducts =  async() => {
        const result = await fetch('src/fake-api.json');
        const product =  await result.json();

        console.log(result);
        this.props.getProducts(product);
    };

    render() {
        const {products} = this.props;
        console.log(products);
        return (
            <div className='kabum-page-container mt-4'>
                <Filter brands={['Samsung', 'Acer', 'Nvidia', 'Asus', 'Gigabyte']} />
                {/*<Products header='Produtos' products={this.props.products}/>*/}
            </div>
        )
    }
}

const mapStateToProps = state =>({
    filter:  state.filter,
    products: state.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
    filterProducts,
    getProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page)

