 import React from 'react'
 import './NewCollections.css'
 import new_product from '../Assets/newCollection'
 import Item from '../Items/Item'
 
 const NewCollections = () => {
   return (
     <div className='new-collections'>
       <h1>NEW COLLECTIONS</h1>
       <hr />
       <div className="collections">
        {new_product.map((item,i)=>{
          return <Item item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price}/>
        })}
       </div>
     </div>
   )
 }
 
 export default NewCollections
 