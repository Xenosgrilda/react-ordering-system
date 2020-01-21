export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

// Actions Creators
export const filterProducts = (filterForm) => {
    return {
     type: FILTER_PRODUCTS,
     payload: filterForm
    }
};

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        payload: products
    }
};

// const boundFilterProducts = (filterForm) => dispatch => {
//     dispatch(filterProducts(filterForm))
// };
