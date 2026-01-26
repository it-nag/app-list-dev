import React, { useEffect, useState } from 'react'
import './Credit.css'

function Credit() {
    const [dateState, setDateState] = useState(new Date())

    useEffect(()=>{
        setDateState(new Date())
    }, [])

    return (
        <div className='credit'>
            <h5 id='copy'>PT. Nirwana Alabare Garment &copy; {dateState.toLocaleString('en-US', {year: 'numeric'})}</h5>
        </div>
    )
}

export default Credit