import { combineReducers } from 'redux';
import { AddToCartReducer, CartReducer, OrderReducer } from './ProductReducer';

const rootReducer = combineReducers({
    addToCart: AddToCartReducer,
    cart: CartReducer,
    order: OrderReducer
});
export default rootReducer;
