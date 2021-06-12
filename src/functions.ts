import { PageType, PageTypeList } from "./types";

export const pageName = (() => {
  const lookup: Record<PageType, string> = {
    "paris": "Paris",
    "nyc": "New York City",
    "tallinn": "Tallinn"
  };
  return (pt: PageType) => lookup[pt];
})();

export const pageIndex = (pt: PageType) =>
  PageTypeList.findIndex(x => x === pt);

/*
export const pageIndex = (() => {
  const lookup: Record<PageType,number> = {
    "paris": 0,
    "nyc": 1,
    "tallinn": 2
  };
  return (pt: PageType) => lookup[pt];
})();
*/