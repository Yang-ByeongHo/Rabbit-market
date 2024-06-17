import './App.css'
import React, {useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Items from './components/Items';
import Create from './components/Create';
import Update from './components/Update';
import Expentinfo from './components/Expendinfo';
import Swal from 'sweetalert2';

function App() {
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(8);
  const [productInfo, setProductInfo] = useState([
      {id : 1, image : 'carrot.jpg', title : '당근', price : 1000, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 2, image : 'carrot.jpg', title : '수박', price : 10000, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 3, image : 'carrot.jpg', title : '참외', price : 20000, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 4, image : 'carrot.jpg', title : '감자', price : 50000, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 5, image : 'carrot.jpg', title : '감자', price : 1000, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 6, image : 'carrot.jpg', title : '감자', price : 9500, residence : '000동', body : '이당근은 중고입니다.'},
      {id : 7, image : 'carrot.jpg', title : '참치', price : 15150, residence : '000동', body : '이당근은 중고입니다.'},
      
  ])

  let content 
  
  if (mode === "WELCOME")
      content = '';

  else if (mode === "READ") {
    let image, title, price, residence, body = null;
    const handleDeleteClick = (productToDelete) => {
      Swal.fire({
        icon: 'warning',
        title: '삭제',
        text: `삭제 하시겠습니까??`,
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedProducts = productInfo.filter((product) => product.id !== productToDelete);
          setProductInfo(updatedProducts);
          setMode('WELCOME')
        } else {
          console.log('취소');
        }
      });
    };

    for(let i=0; i<productInfo.length; i++){
      if(productInfo[i].id === id){
        image = productInfo[i].image;
        title = productInfo[i].title;
        price = productInfo[i].price;
        residence = productInfo[i].residence;
        body = productInfo[i].body;
      }
    }
    content = <Expentinfo id = {id} image = {image} title={title} price={price} residence={residence} body={body} handleDeleteClick={handleDeleteClick} setMode = {setMode}/>
  }

  else if(mode ==='CREATE') {
    content = <Create onCreate={(_image, _title, _price, _residence, _body) => {
      const newProductInfo = {id:nextId, image:_image, title:_title, price:_price, residence:_residence, body:_body}
      const newproductInfos = [...productInfo]
      newproductInfos.push(newProductInfo);
      setProductInfo(newproductInfos);
      setMode('WELCOME')
      setNextId(nextId + 1);
    }}></Create>
  }
  else if(mode === 'UPDATE') {
    let image, title, price, residence, body = null;
    // forEach 로 대치
    for(let i=0; i<productInfo.length; i++){
      if(productInfo[i].id === id){
        image = productInfo[i].image;
        title = productInfo[i].title;
        price = productInfo[i].price;
        residence = productInfo[i].residence;
        body = productInfo[i].body;
      }
    }
    content = <Update image = {image} title={title} price={price} residence={residence} body={body} onUpdate={(image, title, price, residence, body) =>{
      const newproductInfos = [...productInfo]
      const updatedproductInfos = {id:id, image:image, title:title, price:price, residence:residence, body:body}
      const objIndex = newproductInfos.findIndex(t => t.id === id);
      newproductInfos[objIndex] = updatedproductInfos;
      setProductInfo(newproductInfos)
      setMode('READ');
    }}></Update>
  }

  return (
    <div className="App">
      <Header/>
      <Menu />
      <a className='create' href='/create' onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>등록하기</a>
      {content}
      <div>
        <Items onChangeMode={(id)=>{setMode("READ"); setId(id);}} productInfo={productInfo}/>
      </div>
    </div>
  );
}

export default App;
