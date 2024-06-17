import './Create.css'
import React, {useState} from 'react'


export default function Create(props) {
    const [imageSrc, setImageSrc] = useState('');
  
    const encodeFileToBase64 = (fileBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      return new Promise((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result);
          resolve();
        };
      });
    };
  
    return (
      <article className='ferment'>
        <h2>등록하기</h2>
        <form onSubmit={event => {
          event.preventDefault();
          const image = imageSrc;
          const title = event.target.title.value;
          const price = event.target.price.value;
          const residence = event.target.residence.value;
          const body = event.target.body.value;
          props.onCreate(image, title, price, residence, body);
        }}>
          <p><input type='text' name = 'title' placeholder='제목' required /></p>
          <p><input type='number' name = 'price' placeholder='가격' required /></p>
          <p><input type='text' name = 'residence' placeholder='지역' required /></p>
          <p><textarea name = 'body' placeholder='내용' required></textarea></p>
          <p className='right'><input type="file" required onChange={(e) => {
          encodeFileToBase64(e.target.files[0]);
        }} /></p>
        <div className="preview">
          {imageSrc && <img src={imageSrc} className = 'preview_img' alt="preview-img" />}
        </div><br></br>
          <p><input type='submit' className='button' value = '등록하기'></input></p>
        </form>
      </article>
    )
  }
  
