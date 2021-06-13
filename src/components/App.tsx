import React from 'react';
import { TabStyle } from "../types";
import { KendoTabs } from "./KendoTabs";
import { CustomTabs } from "./CustomTabs";

interface Props {
    tabStyle: TabStyle;
    setTabStyle: (tabStyle: TabStyle) => void;
}

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
            {p.tabStyle === "custom" ? <CustomTabs /> : <KendoTabs />}
        </div>
    </>;

export const App = () => {
    const [tabStyle, setTabStyle] = React.useState<TabStyle>("kendo");
    return <View tabStyle={tabStyle} setTabStyle={setTabStyle} />;
};

/*
export interface AppState {
    page: PageType;
    tabStyle: TabStyle;
}

export interface AppController {
    setPage: (page: PageType) => void;
    setTabStyle: (tabStyle: TabStyle) => void;
}

export type AppProps = AppState & AppController;
*/