import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../layout'
import { dataMarkets } from '../../components/data/dataHome';
import Link from 'next/link';


export async function getServerSideProps(context) {
    try {
        const { blog } = context.params
        // console.log(context.params, blog)
        const data = dataMarkets.find((item) => item.url == blog)

        if(!data){
            context.res.statusCode = 404;
            return {
                notFound: true,
            }
        }

        return { props: { type: 'Markets', data: data } }
    } catch (error) {
        context.res.statusCode = 404;
        return {
            notFound: true,
        }
    }
}

export default function Blog({ type, data }) {
    const router = useRouter()
    const { pathname, query } = router;
    // console.log(pathname, query );
    // console.log(data)
    const { title, desc, author, content, date } = data
    return (
        <Layout>
            <div className="wrap-blog">
                <div className="top-pics">
                    <Link
                        href={{
                            pathname:`/${type.toLowerCase()}`
                        }}
                    >
                        <h2>{type}</h2>
                    </Link>
                </div>
                <div className="infor">
                    <div className="infor-item title">{title}</div>
                    <div className="infor-item author">Author: {author}</div>
                    <div className="infor-item date">Date: {date}</div>
                    <div className="infor-item desc">Description: {desc}</div>
                </div>

                <div className="wrap-content">
                    <p dangerouslySetInnerHTML={{ __html: content }}></p>
                </div>
            </div>
        </Layout>
    )
}
