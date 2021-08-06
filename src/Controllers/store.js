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
import {createDiscountReducer, getDiscountsReducer} from "./reducers/discount";

import fragrancesReducer from '../Controllers/reducers/fragrance'
import collectionsReducer from '../Controllers/reducers/collection'
import storesReducer from '../Controllers/reducers/storelocator'
import locationsReducer from '../Controllers/reducers/shipping'
import ordersReducer from '../Controllers/reducers/order'

const reducer = combineReducers({
    getCategories: getCategoriesReducer,

    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    createProducts: createProductReducer,
    updateProductReducer,

    getDiscounts: getDiscountsReducer,
    createDiscount: createDiscountReducer,

    fragrances: fragrancesReducer,
    collections: collectionsReducer,
    stores: storesReducer,
    locations: locationsReducer,
    orders: ordersReducer

})

const middleware = [thunk]
const initialState = {}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store