import React from 'react'
import './List.css'
import AppList from '../../Components/AppList/AppList'

function List() {
  return (
    <section className='list' id='list'>
      <div className='container'>
        <AppList />
      </div>
    </section>
  )
}

export default List