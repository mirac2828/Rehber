import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../Api/api'
import urls from '../Api/urls'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import actionTypes from '../redux/actions/actionTypes'
import { useSelector } from 'react-redux'









function Edit() {
  const {personalState}=useSelector(state=>state)

    const params= useParams()
    const navigate= useNavigate()
    const[form,setForm]=useState({})
    const dispatch=useDispatch()
    
    
    
  useEffect(()=> 
  {api.get(`${urls.personal}/${params.bookId}`)
  .then((res)=>{  setForm(res.data) })
  .catch((err)=>{  alert("hayırr") }) },[params.bookId])
  
  
  if(form===null) return "loading"

const handleEdit=(event)=>{event.preventDefault() 
  
    api.put( `${urls.personal}/${params.bookId}`,form)
     .then((res)=>{ dispatch({type:actionTypes.personal.EDIT_NUMBER,payload:res.data}) 
     })
     .catch((err)=>{ alert('yapma')})
     navigate("/");
     

    

    


}
if(personalState.pending=== false) 
return "loading" 


    
  return (
    <form onSubmit={handleEdit} style={{display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"
    }}> 
    
    <div className=" mt-5 mb-3 w-50 mx-5 ">
     <div style={{alignItems:"center",display:"flex",width:"100vh",justifyContent:"center"}}> <h1 style={{color:"teal",width:"80%",textAlign:"center"}}> REHBER</h1>  </div>
    
    <label htmlFor="name" className="form-label">Ad</label>
  
    <input type="text"
    value={form.name}
    onChange={event=> setForm({...form,name:event.target.value})}
   
     className="form-control"
      id="name" 
      htmlFor="name" 
      />
  </div>
   
  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Soyad</label>
  
    <input type="text"
    value={form.surname}
    onChange={(event)=> setForm({...form,surname:event.target.value})}
     className="form-control"
     id="surname"
     htmlFor="surname"
      
      />
  </div>
  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Telefon Numarası</label>
  
    <input type="text"
    value={form.phoneNumber}
    onChange={ (event)=> setForm({...form,phoneNumber:event.target.value}) }
     className="form-control"
     id="phoneNumber"
     htmlFor="phoneNumber"
      
     
     />
  </div>

  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Şehir</label>
  
    <input type="text"
     value={form.city}
    onChange={ (event)=> setForm({...form,city:event.target.value}) }
     className="form-control"
      id="city"
      htmlFor="city" 
      />
  </div>

 <button
 type='submit'
 
 className='btn btn-primary mx-5 mt-5 w-50'> Kaydet</button>

 </form>
  )
}

export default Edit