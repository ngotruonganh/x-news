import React from "react";
import Layout from "../../layout";
import { BreadCrumb, ListSection } from "../../components";
import dataCategory from "../../mocks/resData/dataCategory.json";
import dataSection from "../../mocks/resData/dataSection1.json";
import classNames from "classnames";
import { getTagColor } from "../../utils/func";
import dataRecent from "../../mocks/resData/dataRecent.json";
import ListNews from "../../components/ListNews";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter()
  const { query } = router
  
  return (
    <Layout>
      <div className="search-wrap mt-3">
        <div className="d-flex align-items-center mt-2">
          <BreadCrumb subTitle={`search result: ${query.keyword}`} />
        </div>
        <div className="title mt-3">
          <span>Search Result: </span>
          <span className="text-warning">{query.keyword}</span>
        </div>
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            {dataSection.data.length && (
              <ListSection
                data={dataSection.data}
                desc={true}
                isVideo={false}
              />
            )}
            <div className="d-flex justify-content-center my-3">
              <Pagination postPerPage={1} totalPost={5} />
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
            <div className="rank-wrapper">
              Category
              <hr className="throw-line" />
              {dataCategory.data.map((item, idx) => {
                return (
                  <div className="rank-item" key={idx}>
                    <span className="title">
                      <img src="/assets/icons/icon-right.svg" alt="" />
                      {item.name}
                    </span>
                    <span
                      className={classNames("total", getTagColor(item.tagSeo))}
                    >
                      {item.total}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
