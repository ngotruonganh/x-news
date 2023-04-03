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
                        meta={true}
                    />
                </div>
                <div className="masonry-right ">
                    <div>
                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[1]}
                            meta={true}
                            
                        />
                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[2]}
                            meta={true}
                        />
                    </div>
                    <MasonryBox
                        className="masonry-box post-media"
                        data={data[3]}
                        meta={true}
                    />
                </div>
            </div>
        </div>
    )
}
