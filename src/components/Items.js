import './Items.css'
import React from 'react'

export default function Items(props) {
  
    const productInfo = props.productInfo
    productInfo.sort(function compare(a, b) {
      return b.id - a.id;
    });
  
    const items = productInfo.map ((product, index) => 
    <div>
        <div className='flex_item'  key={index} onClick={ (ev) => {ev.preventDefault(); props.onChangeMode(Number(product.id))}}>
            <div>
                <img src={product.image} width={225} height={225} alt='product'/>
            </div>
            <div>
                {product.title}
            </div>
            <div>
                {product.price}원
            </div>
            <div>
                {product.residence}
            </div>
            <div className='goright'>
            </div>
        </div>
    </div>
    )
  
    return (<div className='flex-container'>{items}</div>)
  }
  
