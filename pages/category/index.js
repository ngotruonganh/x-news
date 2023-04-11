import Layout from 'layout'
import { getHome } from 'pages/api/posts'
import { BreadCrumb, HeadSection, ListNews, ListSection, Pagination, RankBox, SideTag } from 'components';
import dataCategory from 'mocks/resData/dataCategory.json'

export async function getStaticProps(context) {
	// Fetch data from external API
	let catePost = await getHome()
	if (!catePost) {
		return {
			notFound: true,
		}
	}
	// Pass data to the page via props
	return { props: { catePost } }
}

export default function Category({ catePost }) {
	const { dataSection1, dataSection2 } = catePost
	const dataSection = [...dataSection1, ...dataSection2]
	return (
		<Layout>
			<div className='category-wrapper layout-wrapper'>
				<div className='head-section-wrapper mb-3'>
					{dataSection1.length && <HeadSection data={dataSection1} />}
				</div>
				<BreadCrumb subTitle="International" />
						<SideTag title="Category" showTag={false} />
				<div className='row'>
					<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
					<div className='row' id='scroll-index'>
					<div className='col-lg-9 col-md-9 col-sm-12 col-xs-12'>
					
						<p className='mt-3'>This is the place of all the international latest
							news, get it and make sure you always follow us to be up to dated all the time.</p>
					</div>
					<div className='col-lg-3 col-md-3 col-sm-12 col-xs-12'>

					</div>
				</div>
						{dataSection.length && <ListSection data={dataSection} desc={true} isVideo={false} />}
						<Pagination toIndex={true} />
					</div>
					<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
						<div className="d-flex justify-content-between">
							<div className="align-self-start font-weight-bold">Recent</div>
							<div className="">Trending</div>
							<div className="">Most Views</div>
						</div>
						<hr className="throw-line" />
						<ListNews data={dataSection} />
						<div className='subscribe-wrapper'>
							<div>
								<div className='title'>Get Latest Updates</div>
								<input placeholder='Your email address' />
								<div>
									<button>
										Subscribe
									</button>
								</div>
							</div>
						</div>
						<RankBox title="Category" className="mt-3" data={dataCategory.data}/>
					</div>
				</div>
			</div>
		</Layout>
	)
}
