import React from 'react';
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import * as tab from "./Tabs";

export const KendoTabs = () => {
  const [selected, setSelected] = React.useState(1);

  return (
    <TabStrip
      selected={selected}
      onSelect={e => setSelected(e.selected)}
      className="main-tabstrip"
      tabPosition="left"

    >
      <TabStripTab title="Paris"><tab.TabParis /></TabStripTab>
      <TabStripTab title="New York City"><tab.TabNyc /></TabStripTab>
      <TabStripTab title="Tallinn XXXXXXXXXXXXXXXX"><tab.TabTallinn /></TabStripTab>
    </TabStrip>
  );
};

/*
export const TabStrip = (p: AppSharedProps) =>
    p.pages.length > 1
        ? <KendoTabStrip
            className="main-tabstrip"
            selected={p.selectedPage}
            onSelect={e => p.selectPage(e.selected)}
            tabPosition="left">
            {p.pages.map((page, idx) =>
                <KendoTabStripTab key={idx} title={pageTitle(page)}>
                    {idx === p.selectedPage && <PageContent {...p} />}
                </KendoTabStripTab>
            )}
        </KendoTabStrip>
        : <div style={{ marginTop: "10px" }}><PageContent {...p} /></div>
    ;

*/