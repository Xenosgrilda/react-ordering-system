import {ADD_PRODUCT_CART, REMOVE_PRODUCT_CART} from "../actions/products-action";

const initialProductState = {
    productListFilter: {
        name: '',
        brands: []
    }
};

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            return null;
        case REMOVE_PRODUCT_CART:
            return null;
        default:
            return null;
    }
};


export default productReducer;
