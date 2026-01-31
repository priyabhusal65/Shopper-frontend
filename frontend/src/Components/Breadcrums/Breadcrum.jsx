import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Assets/breadcrumarrow.png"

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      <span className="crumb">HOME</span>
      <img src={arrow_icon} alt="" />
      <span className="crumb">SHOP</span>
      <img src={arrow_icon} alt="" />
      <span className="crumb">{product.category}</span>
      <img src={arrow_icon} alt="" />
      <span className="crumb crumb-current">{product.name}</span>
    </div>
  )
}

