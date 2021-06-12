export type TabStyle = "kendo" | "custom";

export type PageType = 0 | 1 | 2;

export interface AppState {
    page: PageType;
    tabStyle: TabStyle;
}

export interface AppController {
    setPage: (page: PageType) => void;
    setTabStyle: (tabStyle: TabStyle) => void;
}

export type AppProps = AppState & AppController;
