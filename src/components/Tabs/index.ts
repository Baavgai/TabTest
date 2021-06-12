// export * from "./TabNyc";
// export * from "./TabParis";
// export * from "./TabTallinn";
// import { PageType } from "./types";

import { TabNyc } from "./TabNyc";

import { PageType, AppProps } from "../../types";

const PageComponentLookup: Record<PageType, () => JSX.Element> = {
    0: TabNyc,
    1: TabNyc,
    2: TabNyc
};


export const PageComponent = (p: AppProps) =>
    PageComponentLookup[p.page]();
