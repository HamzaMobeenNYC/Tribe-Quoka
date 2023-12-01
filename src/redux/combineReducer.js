import WalletReducer from './connectWallet/reducer'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'

const middleware = [thunk]
const reducer = combineReducers({
    contract: WalletReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;