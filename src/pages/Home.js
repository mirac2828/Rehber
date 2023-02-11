import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../Api/api'
import urls from '../Api/urls'
import { useDispatch } from 'react-redux'
import actionTypes from '../redux/actions/actionTypes'

import CustomModal from '../components/CustomModal'
import { useState } from 'react'






function Home() {
  const[willShowModal,setWillShowModal]=useState(false)
  const[willDeletebook,setWillDeleteBook]=useState("")
 
    const dispatch=useDispatch()
    const {personalState}=useSelector(state=>state)
    console.log(personalState)

    const handleDelete=(id)=>{ 
     
      api.delete(`${urls.personal}/${id}`) 
      .then((res)=>{ dispatch({ type:actionTypes.personal.DELETE_PERSONAL, payload:id })     })
      .catch((err)=>{  })



     }
    
     
  

   
  return (

   
    <>

        
<div className='text-center '  style={{height:"100px",backgroundColor:"rgba(121,205,205,.5)",alignItems:"center",display:"flex",justifyContent:"center"}}> 
<h1  style={{color:"red"}}> Telefon Rehberi</h1></div >


<table style={{color:"#006666"}}   className="table mt-5 container">

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
     
     
     
     <tbody style={{}}>
        {personalState.personal.map((item,index) => (


<tr key={item.id}>
      <th scope="row">{index+1} </th>
      <td> {item.name } </td>
      <td> {item.surname} </td>
      <td>{item.phoneNumber} </td>
      <td>{item.city} </td>
      <div className='d-flex gap-2 '>
         <button onClick={()=>{ setWillShowModal(true)
         setWillDeleteBook(item.id)



         }
         
        
        
        }
         
         
         type='button'
      style={{color:"#193300",
       borderRadius:"4px", 
        border:"none",
      backgroundColor:"#FF6666"}}  
        >Sil</button>
      <Link to={ `/edit/${item.id}`  }
      type="button"
      
      style={{borderRadius:"4px",
      textDecoration:"none",
      backgroundColor:"#00CCCC",
      color:"#FF3399",
      border:"none"}}>Düzenle</Link>




      </div>
    </tr>

) )}
     
    </tbody>
    {willShowModal===true &&(
      <CustomModal message={"Silmek istiyor musunuz?" }  
    button={"Evet"} buton={"Hayır"} 
    onCancel={()=>setWillShowModal(false)}
    onconfirm={()=>{ handleDelete(willDeletebook)
    
    setWillShowModal(false) }
    }
   
    
    />
   

    )



    }
    
    </table>
    
<div className='d-flex  align-items-center justify-content-center '>  
<Link to={"/list-name" }  
style={{
margin:"20px",
marginRight:"60px",
backgroundColor:"#6666FF",

 color:"#E0E0E0",
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