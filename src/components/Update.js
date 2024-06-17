import './Update.css'
import React, { useState } from 'react'

export default function Update(props) {
    const [image, setImage] = useState(props.image);
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [residence, setResidence] = useState(props.residence);
    const [body, setBody] = useState(props.body);
  
    const encodeFileToBase64 = (fileBlob) => {
      
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
  
      return new Promise((resolve) => {
        reader.onload = () => {
          setImage(reader.result);
          resolve();
        };
      });
    };
  
    return (
      <article className='ferment'>
        <h2>수정하기</h2>
        <form onSubmit={event => {
          event.preventDefault();
          const title = event.target.title.value;
          const price = event.target.price.value;
          const residence = event.target.residence.value;
          const body = event.target.body.value;
          props.onUpdate(image, title, price, residence, body)
        }}>
        
          <p><input type='text' name = 'title' placeholder='title' value = {title} onChange={event => {
            setTitle(event.target.value)
          }}/></p>
          <p><input type='number' name = 'price' placeholder='price' value = {price} onChange={event => {
            setPrice(event.target.value)
          }}/></p>
          <p><input type='text' name = 'residence' placeholder='residence' value = {residence} onChange={event => {
            setResidence(event.target.value)
          }}/></p>
          <p><textarea name = 'body' placeholder='body' value = {body} onChange={event => {
            setBody(event.target.value)
          }}></textarea></p> 
          <p className='right'><input type="file" onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
          }} /></p>
          <div className="preview">
            {image && <img src={image} alt="preview-img" />}
          </div>
          <p><input className='button' type='submit' value = '수정하기'></input></p>
        </form>
      </article>
    )
  }
  