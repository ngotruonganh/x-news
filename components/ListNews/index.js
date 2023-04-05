import React from 'react'
import ListItem from './ListItem'
import classNames from 'classnames'

export default function ListNews({data,size=5,className}) {

  function renderListNews(){
    let result = []
    for (let step = 0; step < size; step++) {
      result.push( <ListItem key={step} data={data[step]} desc={false} />)
    }
    return result
  }

  return (
    <div className={classNames("list-news-wrapper",className)}>
       {renderListNews()}
    </div>
  )
}
