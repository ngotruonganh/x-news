import React from 'react'
import MasonryBox from './masonry_box'
export default function SectionFirst({ data } ) {

    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="left-side">
                        <MasonryBox
                            className="masonry-box post-media"
                            data={data[0][0]}
                            desc={true}
                        />
                    </div>
                    <div className="center-side">
                        <MasonryBox
                            className="masonry-box post-media"
                            data={data[1][0]}
                            desc={true}
                        />

                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[1][1]}
                        />
                        <MasonryBox
                            className="masonry-box small-box post-media"
                            data={data[1][2]}
                        />
                    </div>
                    <div className="right-side hidden-md-down">
                        <MasonryBox
                            className="masonry-box post-media"
                            data={data[0][1]}
                            desc={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
