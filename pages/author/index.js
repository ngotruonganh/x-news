import React from "react";
import Layout from "layout";
import Author from "views/author/author";
import { BreadCrumb,Pagination } from "components";
import data from "mocks/resData/dataPostByAuthor.json";
export default function AuthorPage() {
  return (
    <Layout>
      <div className="author-wrap mt-3">
        <BreadCrumb subTitle="Author" />
        <Author />
        <div className="row mt-3">
          {data.map((item) => {
            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className="position-relative">
                  <img className="w-100" src={item.image} alt="" />
                  <span className="position-absolute top-0 start-0">
                    {item.type}
                  </span>
                </div>
                <div>
                  <span>{item.author}</span>
                  <span> - </span>
                  <span>{item.date}</span>
                </div>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center my-3">
          <Pagination postPerPage={1} totalPost={5} />
        </div>
      </div>
    </Layout>
  );
}
