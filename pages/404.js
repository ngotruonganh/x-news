import Layout from "../layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="error-wrapper">
        <img src="/assets/images/404.png" alt="opps" />
        <h1 className="mt-5 mb-0">SORRY, PAGE NOT FOUND!</h1>
        <p>Don't panic just click the big button to retun home</p>
        <a
          href="/"
          className="bg-warning border border-0 py-3 px-5 font-weight-bold rounded"
        >
          <i class="fa-solid fa-arrow-left mr-4"></i>
          Go Back Home 
        </a>
      </div>
    </Layout>
  );  
}
 