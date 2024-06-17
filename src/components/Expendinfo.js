import './Expendinfo.css'
import React from 'react'

export default function Expentinfo({id, image, title, price, residence, body, handleDeleteClick, setMode}) {
    return (
    <div className='ferment'>
      <div>
          <img src={image} width={225} height={225} alt='product'/>
      </div>
      <div>
          {title}
      </div><br></br>
      <div className='left'>
        가격 : {price}원
      </div>
      <div className='left'>
        지역 : {residence}
      </div><br></br>
      <div className='left'>
          {body}
      </div>
        <br></br><a href={'/update/'+id} onClick={event => {
        setMode('UPDATE');
        event.preventDefault();
        }}>수정하기</a> &emsp;
        <button className = 'button' onClick={() => {handleDeleteClick(id);}}>삭제하기</button>
        </div>
    )
}
