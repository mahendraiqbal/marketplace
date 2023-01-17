import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import reducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ["auth", "cart"]
};

const pReducer = persistReducer(persistConfig, reducers);

const enhancer = applyMiddleware(rpm, logger);
export const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);