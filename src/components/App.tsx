import React from "react";
import { KendoTabs } from "./KendoTabs";

export const App = () =>
    <>
        <div id="top-info">
            <div className="left">Tab Test</div>
            <div className="right"></div>
        </div>
        <div className="container-fluid view-port">
            <KendoTabs />
        </div>
    </>;
