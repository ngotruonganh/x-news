import Loading from '../components/Loading'
import Layout from '../layout'
import { SectionFirst, SectionFour, SectionSecond, SectionThird } from '../components'
import dataSection1 from '../mocks/resData/dataSection1.json'

export default function Home() {
	return (
		<Layout>
			<Loading />
			<div  className='layout-wrapper'>
				<div >
					<SectionFirst data={dataSection1.data} />
				</div>
				<div>
					<SectionSecond data={dataSection1.data} />
				</div>
				<div>
					<SectionThird data={dataSection1.data} />
				</div>
				<div>
					<SectionFour data={dataSection1.data} />
				</div>
				<hr className="invis" />
			</div>
		</Layout >
	)
}
