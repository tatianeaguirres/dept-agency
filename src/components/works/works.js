import React from 'react'
import './works.css'
import CardImage from '../cards/card-image'
import CardText from '../cards/card-text'
import CardTestemonial from '../cards/card-testemonial'

const Works = ({ testemonialData, worksData }) => {
  return (
    <section className='works'>
      <div className='works__cards'>
        {worksData.slice(0, 4).map((work, index) => (
          <CardImage props={work} key={index} />
        ))}
        {worksData.slice(4, 6).map((work, index) => (
          <CardText props={work} key={index} />
        ))}
        {worksData.slice(6, 7).map((work, index) => (
          <CardImage props={work} key={index} />
        ))}
        {worksData.slice(7, 9).map((work, index) => (
          <CardImage props={work} key={index} />
        ))}
        {worksData.slice(9, 11).map((work, index) => (
          <CardText props={work} key={index} />
        ))}
        {worksData.slice(11, 15).map((work, index) => (
          <CardImage props={work} key={index} />
        ))}
        <CardTestemonial props={testemonialData} />
        {worksData.slice(15, 17).map((work, index) => (
          <CardImage props={work} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Works
