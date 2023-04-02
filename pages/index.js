import Loading from '../components/Loading'
import Layout from '../layout'
import { SectionFirst, SectionSecond, SectionThird, SectionBanner } from '../components/SectionBox'
import { dataLifeStyle, dataTravel, dataFastion, dataBusiness, dataMarkets } from '../components/data/dataHome'
import Feature from '../components/Feature'


export default function Home() {
	return (
		<Layout>
			<Loading />
			<div id="wrapper">
				<SectionFirst data={[dataBusiness, dataTravel]} />

				<SectionSecond data={[dataBusiness, dataFastion]} />

				<SectionBanner />

				<hr className="invis" />

				<SectionThird />

				<hr className="invis" />

				<SectionBanner />

				<hr className="invis" />

				<div className="category-layout ">
					<hr className="break-line" />
					<div className="title">
						<h2>Discover</h2>
					</div>
					<Feature dataFeature={dataFastion} desc={true} />
				</div>
				<div className="category-layout ">
					<hr className="break-line" />
					<div className="title">
						<h3>Trending in Crypto</h3>
					</div>
					<Feature dataFeature={dataFastion} desc={true} />
				</div>
				<div className="category-layout ">
					<hr className="break-line" />
					<div className="title">
						<h3>Markets</h3>
					</div>
					<Feature dataFeature={dataFastion} desc={true} />
				</div>
			</div>
			<div className="category-layout ">
				<hr className="break-line" />
				<div className="title">
					<h3>Bussines</h3>
				</div>
				<Feature dataFeature={dataFastion} desc={true} />
			</div>
			<hr className="invis" />
		</Layout >
	)
}
