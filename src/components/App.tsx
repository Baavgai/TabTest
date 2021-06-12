import React from 'react';
import { AppState as State, AppController as Controller, AppProps as Props } from "../types";

import { KendoTabs } from "./KendoTabs";

const SelectTabStyle = (p: Props) =>
    <button
        type="button"
        className="btn btn-secondary"
        onClick={() => p.setTabStyle(p.tabStyle === "kendo" ? "custom" : "kendo")}
    >{p.tabStyle}</button>

const View = (p: Props) =>
    <>
        <div id="top-info">
            <div className="left">
                <h2>Tab Test</h2>
            </div>
            <div className="right"><SelectTabStyle {...p} /></div>
        </div>
        <div className="container-fluid view-port">
            <KendoTabs {...p} />
        </div>
    </>;

export const App = () => {
    const [state, setState] = React.useState<State>({ page: 1, tabStyle: "kendo" });
    const ctrl: Controller = {
        setPage: page => setState(s => ({ ...s, page })),
        setTabStyle: tabStyle => setState(s => ({ ...s, tabStyle }))
    };
    return <View {...state} {...ctrl} />;
}
