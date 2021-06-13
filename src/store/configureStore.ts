import { applyMiddleware, combineReducers, createStore, StoreEnhancer, Middleware, compose } from "redux";
// import { createEpicMiddleware, Epic } from "redux-observable";
import { connectRouter } from "connected-react-router";
import { History } from "history";
// import { SharedState } from "store/types";
import { ReducerSlice as SharedReducerSlice } from "./shared";


const createEnhancer = (...middleware: Middleware[]): StoreEnhancer => {
    if (typeof window === "undefined") {
        return applyMiddleware(...middleware);
    } else {
        // eslint-disable-next-line no-underscore-dangle
        const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        return composeEnhancer(applyMiddleware(...middleware));
    }
};

export const configureStore = (history: History) => {
    const middleware: Middleware[] = [];
    const rootReducer = combineReducers({
        ...SharedReducerSlice,
        router: connectRouter(history)
    });
    // apparently putting InitApplicationState here doesn't really do squat
    const store = createStore(rootReducer, createEnhancer(...middleware));
    return store;
};
