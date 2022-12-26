import React from 'react'
import { Link } from 'react-router-dom'

function Why_verizon() {
  return (
    <div className='shop'>
      <div className='shop_items'>
        <ul className='bullet'>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Network</Link></li>
          <li style={{borderBottom:'0.2px solid' , borderColor:'grey',marginBottom:'5px'}}><Link to="">Get more</Link></li>
          <li><Link to="">Social Impact</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Why_verizon