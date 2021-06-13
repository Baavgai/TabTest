import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppController } from "./types";
import { Actions as SharedActions } from "./shared";

export * from "./types";
export * from "./configureStore";


export const useAppSelector = <TSelected>(selector: (state: AppState) => TSelected, equalityFn?: (left: TSelected, right: TSelected) => boolean) =>
    useSelector<AppState, TSelected>(selector, equalityFn);

export const useAppController = (): AppController => {
    const dp = useDispatch<Dispatch<SharedActions>>();
    return {
        selectTabStyle: tabStyle => dp({ type: "selectTabStyle", tabStyle })
    };
};

