import classNames from 'classnames';
import { BreadCrumb, ListSection, SideTag } from '../../components';
import Layout from '../../layout'
import { getTagColor } from '../../utils/func';
import dataCategory from '../../mocks/resData/dataCategory.json'
import dataRecent from '../../mocks/resData/dataRecent.json'
import dataSection6 from '../../mocks/resData/dataSection6.json'
import ListNews from '../../components/ListNews'
import NumberPage from '../../components/NumberPage';


export default function Category() {
    const data = [...dataSection6.data, ...dataSection6.data]
    return (
        <Layout>
            <div className='category-wrapper layout-wrapper'>
                <div className='mt-3'>
                    <BreadCrumb subTitle="Videos" />
                    <SideTag title="Videos" showTag={false} />
                    <p className='mt-3'>This is the place of all the international latest news, get it and make sure you always follow us to be up to dated all the time.</p>
                </div>
                <div className='row'>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        {data && <ListSection data={data} desc={false} isVideo={true} meta={false} />}
                        <NumberPage />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">

                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="align-self-start font-weight-bold">
                                    Recent
                                </div>
                                <div className="">
                                    Trending
                                </div>
                                <div className="">
                                    Most Views
                                </div>
                            </div>
                        </div>
                        <hr className='throw-line' />
                        <ListNews data={dataRecent.data} />
                        <div className='ads-right-wrapper mt-3'>
                            <img src="/mocks/images/ads.svg" alt='' />
                            <div className='ads-item'>Ad</div>
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
