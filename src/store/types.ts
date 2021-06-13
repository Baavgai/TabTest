import { TabStyle } from "../types";

export interface SharedState {
    tabStyle: TabStyle
}

export interface SharedStateSlice {
    shared: SharedState;
}

export interface SharedController {
    selectTabStyle: (tabStyle: TabStyle) => void;
}

export type AppState = SharedStateSlice;

export type AppController = SharedController;