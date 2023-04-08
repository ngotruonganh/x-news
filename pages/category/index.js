import { HeadSection } from '../../components';
import Layout from '../../layout'
import { getHome } from "../api/home";

export async function getInitialProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}
export default function Category() {
  return (
    <Layout>
      <div>
        <HeadSection />
      </div>
    </Layout>
  )
}
