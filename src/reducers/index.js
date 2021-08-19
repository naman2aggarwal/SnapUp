import { combineReducers } from 'redux';
import QuantityReducer from './ProductReducer';

const rootReducer = combineReducers({
    quantity: QuantityReducer
});
export default rootReducer;
