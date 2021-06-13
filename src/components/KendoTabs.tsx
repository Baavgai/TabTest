import React from 'react';
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { PageComponent } from "./PageComponent";
import { PageTypeList, PageType } from "../types";
import { pageName, pageIndex } from "../functions";

export const KendoTabs = () => {
  const [page, setPage] = React.useState<PageType>("nyc");
  return (
    <TabStrip
      selected={pageIndex(page)}
      onSelect={e => setPage(PageTypeList[e.selected])}
      className="main-tabstrip"
      tabPosition="left"
    >
      {
        PageTypeList.map(page =>
          <TabStripTab key={page} title={pageName(page)}><PageComponent page={page} /></TabStripTab>
        )
      }
    </TabStrip>
  );
};
