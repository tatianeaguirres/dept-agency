import React from 'react'
import './filters.css'
import { filterWorksData, filterIndustriesData } from '../../mocks/works-data'

const Filters = () => {
  return (
    <div className='filters'>
      <div className='filters__filter'>
        <label className='filters__label'>Show me</label>
        <select className='filters__select-works'>
          {filterWorksData.map(item => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className='filters__filter'>
        <label className='filters__label'>in</label>
        <select className='filters__select-industries'>
          {filterIndustriesData.map(item => (
            <option value={item.value}>{item.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
