import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../Api/api'
import urls from '../Api/urls'
import { useState } from 'react'
import { useEffect } from 'react'


function Edit() {
    const navigate= useNavigate()
    const[form,setForm]=useState({
    })
    
    const[formValue,setFormValue]=useState({ 
        name:"",
        surname:"",
        city:"",
        phoneNumber:""
        




    }



    )     
    const params= useParams()
useEffect(()=>{api.get(`${urls.personal}/${params.bookId}`)
  .then((res)=>{  setForm(res.data) 
   
     })
  .catch((err)=>{  alert("hayırr") })


  

  },[])
  if(form===null) return "loading"
  const handleEdit=(event)=>{event.preventDefault() 
    api.post(urls.personal,formValue)
    .then((res)=>{ setFormValue(res.data) 
           console.log(setFormValue)})
    .catch((err)=>{ })
    navigate("/")


    



}
  


    
  return (
    <form onSubmit={handleEdit}> 
    
    <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Ad</label>
  
    <input type="text"
    value={form.name}
    onChange={event=> setFormValue({...formValue,name:event.target.value})}
   
     className="form-control"
      id="name" 
      htmlFor="name" 
      />
  </div>
   
  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Soyad</label>
  
    <input type="text"
    value={form.surname}
    onChange={(event)=> setFormValue({...formValue,surname:event.target.value})}
     className="form-control"
     id="surname"
     htmlFor="surname"
      
      />
  </div>
  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Telefon Numarası</label>
  
    <input type="text"
    value={form.phoneNumber}
    onChange={ (event)=> setFormValue({...formValue,phoneNumber:event.target.value}) }
     className="form-control"
     id="phoneNumber"
     htmlFor="phoneNumber"
      
     
     />
  </div>

  <div className=" mt-5 mb-3 w-50 mx-5">
    
    <label htmlFor="name" className="form-label">Şehir</label>
  
    <input type="text"
    value={form.city}
    onChange={ (event)=> setFormValue({...formValue,city:event.target.value}) }
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