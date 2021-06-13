import React from 'react';

import { KendoTabs } from "./KendoTabs";
import { CustomTabs } from "./CustomTabs";
import { useAppController, useAppSelector } from "../store";
// import { Dispatch, createStore, Store } from "redux";
// import { ReactReduxContext, Provider, useDispatch, useSelector } from "react-redux";
import { Provider, ReactReduxContext } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { configureStore } from "../store";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const store = configureStore(history);


const SelectTabStyle = () => {
    const tabStyle = useAppSelector(x => x.shared.tabStyle);
    console.log({tabStyle})
    const { selectTabStyle } = useAppController();
    return (
        <button
            type="button"
            className="btn btn-secondary"
            onClick={() => selectTabStyle(tabStyle === "kendo" ? "custom" : "kendo")}
        >{tabStyle}</button>);
};

const View = () => {
    const tabStyle = useAppSelector(x => x.shared.tabStyle);
    return (
        <>
            <div id="top-info">
                <div className="left">
                    <h2>Tab Test</h2>
                </div>
                <div className="right"><SelectTabStyle /></div>
            </div>
            <div className="container-fluid view-port">
                {tabStyle === "custom" ? <CustomTabs /> : <KendoTabs />}
            </div>
        </>
    );
};

export const App = () =>
    <Provider store={store} context={ReactReduxContext}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
            <View />
        </ConnectedRouter>
    </Provider>;
