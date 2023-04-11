import React from "react";
import { useRouter } from "next/router";
import Layout from "layout";
import { BreadCrumb, ListSection, Pagination, ListNews, RankBox, SideTag } from "components";
import dataCategory from "mocks/resData/dataCategory.json";
import dataSection from "mocks/resData/dataSection1.json";
import dataRecent from "mocks/resData/dataRecent.json";
export default function Search() {
  const router = useRouter()
  const { query } = router

  return (
    <Layout>
      <div className="search-wrap mt-3">
        <div className="d-flex align-items-center mt-2" id="scroll-index">
          <BreadCrumb subTitle={`search result: ${query.keyword}`} />
        </div>
        <div className="title mt-3">

        </div>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <SideTag title="Search Result:" showTag={false}>
            <span className="text-warning">{query.keyword}</span>
            </SideTag>
            <hr className="throw-line" />
            {dataSection.data.length && (
              <ListSection
                data={dataSection.data}
                desc={true}
                isVideo={false}
              />
            )}
            <div className="d-flex justify-content-center my-3">
              <Pagination  toIndex={true}/>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
            <div className="d-flex justify-content-between">
              <div className="align-self-start font-weight-bold">Recent</div>
              <div className="">Trending</div>
              <div className="">Most Views</div>
            </div>
            <hr className="throw-line" />
            <ListNews data={dataRecent.data} />
            <div className="ads-right-wrapper mt-3">
              <img src="/mocks/images/ads.svg" alt="" />
              <div className="ads-item">Ad</div>
            </div>
            <RankBox className="mt-3" title="Categories" data={dataCategory.data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
