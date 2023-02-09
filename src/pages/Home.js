import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../Api/api'
import urls from '../Api/urls'
import { useDispatch } from 'react-redux'
import actionTypes from '../redux/actions/actionTypes'






function Home() {
    const dispatch=useDispatch()
    const {personalState}=useSelector(state=>state)
    console.log(personalState)

    const handleDelete=(id)=>{ 
      console.log(id) ;
     api.delete(`${urls.personal}/${id}`) 
    .then((res)=>{ dispatch({ type:actionTypes.personal.DELETE_PERSONAL, payload:id })     })
    .catch((err)=>{  })
    } 
  

   
  return (

   
    <>

        
<div className='text-center '  style={{backgroundColor:"teal"}}> 
<h1  style={{color:"red"}}> Telefon Rehberi</h1>
 </div>

<table className="table mt-5 container">

  <thead>
    <tr>
      <th scope="col">Sıra</th>
      <th scope="col">Ad</th>
      <th scope="col">Soyad</th>
      <th scope="col">Telefon Numarası</th>
      <th scope="col">Şehir</th>
      <th scope="col">işlemler</th>
    </tr>
    
  </thead>
     
     
     
     <tbody>
        {personalState.personal.map((item,index) => (


<tr key={item.id}>
      <th scope="row">{index+1} </th>
      <td> {item.name } </td>
      <td> {item.surname} </td>
      <td>{item.phoneNumber} </td>
      <td>{item.city} </td>
      <div className='d-flex gap-2 '>
         <button onClick={()=> handleDelete(item.id)}
         
         
         type='button'
      style={{color:"yellow",
       borderRadius:"4px", 
        border:"none"}}  
        className='bg-danger'>Sil</button>
      <button 
      type="button"
      className='bg-warning' 
      style={{borderRadius:"4px",
      color:"red",
      border:"none"}}>Düzenle</button>




      </div>
    </tr>

) )}
     
    </tbody>
    
    
    </table>

<div className='d-flex  align-items-center justify-content-center '>  
<Link to={"/list-name" }  
style={{
margin:"20px",
marginRight:"60px",
 backgroundColor:"blue",
 color:"white",
 cursor:"pointer",
 borderRadius:"4px",
 padding:"7px",
 textDecoration:"none"
}} > İsim Ekle</Link>


</div>
</>

   
  )
}

export default Home