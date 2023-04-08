import Loading from '../components/Loading'
import Layout from '../layout'
import { SectionFirst, SectionFive, SectionFour, SectionSecond, SectionSix, SectionThird } from '../components'
import { getHome } from './api/posts'

export async function getStaticProps(context) {
	// Fetch data from external API
	let postsHome = await getHome()
	if (!postsHome) {
		return {
			notFound: true,
		}
	}
	// Pass data to the page via props
	return { props: { postsHome }, revalidate: 1, }
}

export default function Home({ postsHome }) {
	const {
		dataSection1,
		dataSection2,
		dataSection3,
		dataSection4,
		dataSection5,
		dataSection6,
	} = postsHome;
	return (
		<Layout>
			{/* <Loading /> */}
			<div className='layout-wrapper'>
				{dataSection1.length > 0 &&
					<div className='section-wrapper section-first-wrapper'>
						<SectionFirst data={dataSection1} />
					</div>
				}
				{dataSection2.length &&
					<div className='section-wrapper section-second-wrapper'>
						<SectionSecond data={dataSection2} />
					</div>
				}
				{dataSection3.length > 0 &&
					<div className='section-wrapper section-third-wrapper'>
						<SectionThird data={dataSection3} />
					</div>
				}
				{dataSection4.length &&
					<div className='section-wrapper section-four-wrapper'>
						<SectionFour data={dataSection4} />
					</div>
				}
				{dataSection5.length &&
					<div className='section-wrapper section-five-wrapper'>
						<SectionFive data={dataSection5} />
					</div>
				}
				{dataSection6.length &&
					<div className='section-wrapper section-six-wrapper'>
						<SectionSix data={dataSection6} />
					</div>
				}
				<hr className="invis" />
			</div>
		</Layout >
	)
}
