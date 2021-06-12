import React from 'react';
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { PageComponent } from "./PageComponent";
import { AppProps, PageTypeList } from "../types";
import { pageName, pageIndex } from "../functions";

export const KendoTabs = (p: AppProps) =>
  <TabStrip
    selected={pageIndex(p.page)}
    onSelect={e => p.setPage(PageTypeList[e.selected])}
    className="main-tabstrip"
    tabPosition="left"
  >
    {
      PageTypeList.map(page =>
        <TabStripTab title={pageName(page)}><PageComponent page={page} /></TabStripTab>
        )
    }
  </TabStrip>
  ;
