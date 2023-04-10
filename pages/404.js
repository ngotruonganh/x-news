import Link from "next/link";
import Layout from "../layout";

export async function getInitialProps(context) {
  // Fetch data from external API
  let menuCate = await getHome();

  // Pass data to the page via props
  return { props: { menuCate: menuCate } };
}

export default function Custom404() {
  return (
    <Layout>
      <div className="error-wrapper">
        <div className="row">
          <div className="col-12"> 
            <img className="error-img" src="/assets/images/404.png" alt="opps" />
            <h1 className="mt-5 mb-0">SORRY, PAGE NOT FOUND!</h1>
            <p>Do panic just click the big button to retun home</p>
            <Link href="/" passHref>
              <button className="back-home-btn border border-0 py-3 px-5 font-weight-bold rounded">
                <img
                  className="mr-3"
                  src="/assets/icons/icon-left.svg"
                  alt=""
                />
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
