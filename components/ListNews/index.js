import React from 'react'
import ListItem from './ListItem'
import classNames from 'classnames'
import AdsBanner from '../AdsBanner'

export default function ListNews({ data, size = 5, className, desc = false, showAds = false }) {

  function renderListNews() {
    let result = []
    for (let step = 0; step < size; step++) {
      if (showAds && (step % 4 == 0) && (step>0)) {
        result.push(<div className='list-item-wrapper' key={step+99}>
          <AdsBanner className="mb-3" key={step} />
        </div>)
      }
      result.push(<ListItem key={step} data={data[step]} desc={desc} />)
    }
    return result
  }

  return (
    <div className={classNames("list-news-wrapper", className)}>
      {renderListNews()}
    </div>
  )
}
