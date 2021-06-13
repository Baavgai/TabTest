import React from 'react';
import { PageTypeList, PageType } from "../types";
import { pageName } from "../functions";
import { PageComponent } from "./PageComponent";

interface Props {
  page: PageType;
  setPage: (page: PageType) => void;
}
const Page = (p: Props) =>
  <div className="app-page-link">
    <a href={"/"} onClick={() => p.setPage(p.page)} >{pageName(p.page)}</a>
  </div>;

const PageList = (p: Props) =>
  <>{PageTypeList.map((page, idx) => <Page key={idx} page={page} setPage={p.setPage} />)}</>


export const CustomTabs = () => {
  const [page, setPage] = React.useState<PageType>("nyc");
  return (
    <div className="app-viewport">
      <div className="app-left"><PageList page={page} setPage={setPage} /></div>
      <div className="app-right"><PageComponent page={page} /></div>
    </div>
  );
}
