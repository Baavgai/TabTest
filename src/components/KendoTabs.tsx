import React from 'react';
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { PageComponent } from "./Tabs";
import { AppProps } from "../types";
import { PageName } from "../functions";

export const KendoTabs = (p: AppProps) =>
  <TabStrip
    selected={p.page}
    onSelect={e => p.setPage(e.selected)}
    className="main-tabstrip"
    tabPosition="left"

  >
    <TabStripTab title={PageName}><tab.TabParis /></TabStripTab>
    <TabStripTab title="New York City"><tab.TabNyc /></TabStripTab>
    <TabStripTab title="Tallinn XXXXXXXXXXXXXXXX"><tab.TabTallinn /></TabStripTab>
  </TabStrip>
  ;
