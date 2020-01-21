import {FILTER_PRODUCTS, GET_PRODUCTS} from "../actions/products.action";

const initialProductState = {
    products: [],
    filter: {
        name: '',
        brands: []
    }
};

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return state;
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};


export default productReducer;
