import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {
    createProductReducer,
    getProductDetailsReducer,
    getProductReducer,
    updateProductReducer
} from "./reducers/product";
import {getCategoriesReducer} from "./reducers/category";
import {createStoreReducer, getStoreReducer, getStoresReducer, updateStoreReducer} from "./reducers/storelocator";
import {createShippingReducer, getShippingsReducer} from "./reducers/shipping";
import {createDiscountReducer, getDiscountsReducer} from "./reducers/discount";

const reducer = combineReducers({
    getCategories: getCategoriesReducer,

    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    createProducts: createProductReducer,
    updateProductReducer,

    getStores: getStoresReducer,
    getStore: getStoreReducer,
    createStore: createStoreReducer,
    updateStore: updateStoreReducer,

    getShippings: getShippingsReducer,
    createShipping: createShippingReducer,

    getDiscounts: getDiscountsReducer,
    createDiscount: createDiscountReducer,
})

const middleware = [thunk]
const initialState = {}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store