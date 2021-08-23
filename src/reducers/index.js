
import { combineReducers } from 'redux';
import { AddToCartReducer, CartReducer, OrderReducer, ProductReducer } from './ProductReducer';

const rootReducer = combineReducers({
    addToCart: AddToCartReducer,
    cart: CartReducer,
    order: OrderReducer,
    product: ProductReducer
});
export default rootReducer;
