import { Reducer } from "redux";
import { SharedState as State } from "./types";
import { TabStyle } from "../types"

export type Actions =
    | { type: "selectTabStyle"; tabStyle: TabStyle;  }
    ;

const reducer: Reducer<State, Actions> = (state, action) => {
    console.log("hit reducer", action, state)
    if (state === undefined) {
        return { tabStyle: "kendo" };
    } else if (action.type === "selectTabStyle") {
        return { tabStyle: action.tabStyle };
    } else {
        return state;
    }
};

export const ReducerSlice = {
    shared: reducer
};
