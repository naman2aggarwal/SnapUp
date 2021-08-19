import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
export default store;

//Prototype for states to be used

// Products: Product[],
// SelectedProduct: Product,
// Cart: Product[],
// Orders: Product[],
// Address: {StreetAdress, City, State, ZipCode, Country }

//Description of Product:
// Product {id, title, price, description, category, quantity, image, color}

//Components
//App
// Header
// ProductContainer
//     Product
//     Cart
//     Orders
// Footer
