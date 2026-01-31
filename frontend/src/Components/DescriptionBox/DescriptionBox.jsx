import React from 'react'
import './DescriptionBox.css'



const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is an online platform that facilitates the buying and selling of products, services, or data over the internet. It acts as a digital storefront where customers can browse items, add them to a virtual shopping cart, and complete transactions by making secure electronic payments. These websites allow for direct interaction between sellers and customers, enabling brands to build customer relationships, manage inventory, and collect data to enhance marketing efforts and overall user experience.</p>
        <p>
            Selling online might be your sole revenue source, or it might be part of a multi-channel selling strategy. For example, you might have a large brick-and-mortar retail shop and adopt an online sales channel. Or you might sell a few specialty handcrafted goods through a social media site or social selling destinations like Amazon Live.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
