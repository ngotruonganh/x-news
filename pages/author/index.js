import React from "react";
import Layout from "../../layout";
import Author from "./author";
import data from "../../mocks/resData/dataPostByAuthor.json";
import Pagination from "../../components/Pagination";
import { getHome } from "../api/home";

export async function getServerSideProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}

export default function AuthorPage({menuCate}) {
  console.log(menuCate);
  return (
    <Layout>
      <div className="layout-wrapper">
        <div className="d-flex align-items-center mt-2">
          <img className="mr-3" src="/assets/images/author.svg" alt="home" />
          <span className="font-weight-bold">Home / Author</span>
        </div>
        <Author />
        <div className="row mt-3">
          {data.map((item) => {
            return (
              <>
                <div key={item.id} className="col-12 col-md-4">
                  <div className="position-relative">
                    <img className="w-100" src={item.image} alt=""/>
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
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center my-3">
          <Pagination postPerPage={1} totalPost={5}/>
        </div>
      </div>
    </Layout>
  );
}
