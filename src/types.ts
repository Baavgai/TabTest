export type TabStyle = "kendo" | "custom";

export const PageTypeList = ["paris", "nyc","tallinn"] as const;
export type PageType = (typeof PageTypeList)[number];

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