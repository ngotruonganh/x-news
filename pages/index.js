import Loading from '../components/Loading'
import Layout from '../layout'
import { SectionFirst, SectionFive, SectionFour, SectionSecond, SectionSix, SectionThird } from '../components'
import dataSection1 from '../mocks/resData/dataSection1.json'
import dataSection2 from '../mocks/resData/dataSection2.json'
import dataSection3 from '../mocks/resData/dataSection3.json'
import dataSection4 from '../mocks/resData/dataSection4.json'
import dataSection5 from '../mocks/resData/dataSection5.json'
import dataSection6 from '../mocks/resData/dataSection6.json'
import { getHome } from "./api/home";

export async function getServerSideProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}
export default function Home({menuCate}) {
	console.log(menuCate);
	return (
		<Layout>
			{/* <Loading /> */}
			<div  className='layout-wrapper'>
				<div className='section-wrapper section-first-wrapper'>
					<SectionFirst data={dataSection1.data} />
				</div>
				<div className='section-wrapper section-second-wrapper'>
					<SectionSecond data={dataSection2.data} />
				</div>
				<div className='section-wrapper section-third-wrapper'>
					<SectionThird data={dataSection3.data} />
				</div>
				<div className='section-wrapper section-four-wrapper'>
					<SectionFour data={dataSection4.data} />
				</div>
				<div className='section-wrapper section-five-wrapper'>
					<SectionFive data={dataSection5.data} />
				</div>
				<div className='section-wrapper section-six-wrapper'>
					<SectionSix data={dataSection6.data} />
				</div>
				<hr className="invis" />
			</div>
		</Layout >
	)
}
