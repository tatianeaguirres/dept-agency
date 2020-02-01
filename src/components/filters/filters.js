import React from 'react'
import './filters.css'
import { filterWorksData, filterIndustriesData } from '../../mocks/works-data'

const Filters = () => {
  return (
    <div className='filters'>
      <div className='filters__filter-works'>
        <label className='filters__label-works'>Show me</label>
        <select className='filters__select-works'>
          {filterWorksData.map(item => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className='filters__filter-industries'>
        <label className='filters__label-industries'>in</label>
        <select className='filters__select-industries'>
          {filterIndustriesData.map(item => (
            <option key={item.id} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
