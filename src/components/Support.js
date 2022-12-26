import React from 'react'
import { Link } from 'react-router-dom'

function Support() {
  return (
    <div className='shop'>
      <div className='shop_items'>
        <ul className='bullet'>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Mobile</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Home</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Business</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Contact Us</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Sign In</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Support