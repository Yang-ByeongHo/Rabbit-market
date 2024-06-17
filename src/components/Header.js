import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <img src = './로고.png' className='logo' onClick={() => window.location.reload()} alt='logo'/>
      <div>RABBIT MARKET</div>
      <div className='spacer'></div>
      <input type = 'text' className='search'/>
      <button className='submit'>검색</button>
    </div>
  )
}
