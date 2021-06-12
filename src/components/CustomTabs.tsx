import React from 'react';
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import * as tab from "./Tabs";
import { AppProps } from "../types";

export const CustomTabs = (p: AppProps) =>
  <TabStrip
    selected={p.page}
    onSelect={e => p.setPage(e.selected)}
    className="main-tabstrip"
    tabPosition="left"

  >
    <TabStripTab title="Paris"><tab.TabParis /></TabStripTab>
    <TabStripTab title="New York City"><tab.TabNyc /></TabStripTab>
    <TabStripTab title="Tallinn XXXXXXXXXXXXXXXX"><tab.TabTallinn /></TabStripTab>
  </TabStrip>
  ;
