import classNames from 'classnames';
import { BreadCrumb, HeadSection, ListSection, SideTag } from '../../components';
import Layout from '../../layout'
import { getHome } from '../api/posts'
import { getTagColor } from '../../utils/func';
import dataCategory from '../../mocks/resData/dataCategory.json'

export async function getServerSideProps(context) {
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
	const dataSection = [...dataSection1,...dataSection2]
	return (
		<Layout>
			<div className='category-wrapper layout-wrapper'>
				<div className='head-section'>
					{dataSection1.length && <HeadSection data={dataSection1} />}
				</div>
				<div className='mt-3'>
					<BreadCrumb subTitle="International" />
					<SideTag title="Category" showTag={false} />
					<p className='mt-3'>This is the place of all the international latest news, get it and make sure you always follow us to be up to dated all the time.</p>
				</div>
				<div className='row'>
					<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
						{dataSection.length && <ListSection data={dataSection} desc={true} isVideo={false} />}
					</div>
					<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
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
						<div className="rank-wrapper">
							Category
							<hr className='throw-line' />
							{dataCategory.data.map((item, idx) => {
								return <div className="rank-item" key={idx}>
									<span className='title'>
										<img src="/assets/icons/icon-right.svg" alt='' />
										{item.name}
									</span>
									<span className={classNames("total", getTagColor(item.tagSeo))} >{item.total}</span>
								</div>
							})}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
