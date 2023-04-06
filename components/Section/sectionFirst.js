import React from 'react'
import MasonryBox from '../SectionBox/masonry_box'
export default function SectionFirst({ data }) {

    return (
        <div className="container-fluid">
            <div className="masonry-blog row">
                <div className="masonry-left">
                    <MasonryBox
                        className="masonry-box post-media main"
                        data={data[0]}
                        desc={false}
                        meta={true}
                    />
                </div>
                <div className="masonry-right ">
                    <div>
                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[1]}
                            desc={false}
                            meta={true}
                        />
                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[2]}
                            desc={false}
                            meta={true}
                        />
                    </div>
                    <MasonryBox
                        className="masonry-box post-media"
                        data={data[3]}
                        desc={false}
                        meta={true}
                    />
                </div>
            </div>
        </div>
    )
}
