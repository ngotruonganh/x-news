import Loading from '../components/Loading'
import Layout from '../layout'
import { SectionFirst, SectionFive, SectionFour, SectionSecond, SectionSix, SectionThird } from '../components'
import dataSection1 from '../mocks/resData/dataSection1.json'
import dataSection2 from '../mocks/resData/dataSection2.json'
import dataSection3 from '../mocks/resData/dataSection3.json'
import dataSection4 from '../mocks/resData/dataSection4.json'
import dataSection5 from '../mocks/resData/dataSection5.json'
export default function Home() {
	return (
		<Layout>
			<Loading />
			<div  className='layout-wrapper'>
				<div >
					<SectionFirst data={dataSection1.data} />
				</div>
				<div>
					<SectionSecond data={dataSection2.data} />
				</div>
				<div className='section-third-wrapper'>
					<SectionThird data={dataSection3.data} />
				</div>
				<div className='section-four-wrapper'>
					<SectionFour data={dataSection4.data} />
				</div>
				<div className='section-five-wrapper'>
					<SectionFive data={dataSection5.data} />
				</div>
				<div className='section-six-wrapper'>
					<SectionSix data={dataSection5.data} />
				</div>
				<hr className="invis" />
			</div>
		</Layout >
	)
}
