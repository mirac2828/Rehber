import React from 'react'
import { useState } from 'react'
import api from'../Api/api'
import urls from '../Api/urls'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actionTypes from '../redux/actions/actionTypes'
import { useSelector } from 'react-redux'





function ListName() {
   
  
    const navigate= useNavigate()
    const dispatch =useDispatch()
    const [form,setForm]=useState({
        name:"",
        surname:"",
        phoneNumber:"",
        city:"",
        id:String(new Date().getTime())
    })
    

    const handleSubmit =(event)=>{ event.preventDefault()

        if(form.name=== ''|| form.surname===''|| 
        form.phoneNumber===''||form.city===''){ alert('Hiçbir alan boş bırakılamaz.')
        return 
        
     }  

        api.post(urls.personal,form)
        .then((res)=>{ dispatch({type:actionTypes.personal.ADD_NUMBER ,
             payload:res.data })    })
        .catch((err)=>{alert ('Veriler eklenemedi')})
        navigate('/')
        

        
      
    navigate('/')
      } 
      
      
  return (
    <div > 

    <form onSubmit={handleSubmit}> 
     
<div className=" mt-5 mb-3 w-50 mx-5">
    
  <label htmlFor="name" className="form-label">Adı</label>

  <input type="text"
  value={form.name}
  onChange={ (event)=> setForm({...form,name:event.target.value}) }
   className="form-control"
    id="name" 
    placeholder="Hakan"/>
</div>
<div className="mb-3 w-50 mx-5">
  <label htmlFor="surname"
   className="form-label">Soyadı</label>

  <input type="text" 
  className="form-control" 
  value={form.surname}
  onChange={  (event)=>setForm({...form,surname:event.target.value}) }
  id="surname" 
  placeholder="KARA"/>
</div>
<div className="mb-3 w-50 mx-5">
  <label htmlFor="phoneNumber"
   className="form-label">Telefon Numarası</label>

  <input type="number" 
  className="form-control " 
  value={form.phoneNumber}
  onChange={(event)=>setForm({...form,phoneNumber:event.target.value})}
  id="phoneNumber"
   placeholder=" 05072839566"/>
</div>
<div className="mb-3 w-50 mx-5">
  <label htmlFor="city"
   className="form-label">Şehir</label>

  <input type="text" 
  className="form-control " 
  value={form.city}
  onChange={(event)=>setForm({...form,city:event.target.value})}
  id="city"
   placeholder=" ANKARA"/>
</div>




<div className=' mt-5 my-5 d-flex justify-content-end mx-5'>
    <button 
    className='bg-primary '
    type="submit"
     > Kaydet</button> 
      
    </div>
    </form>


    </div>
  )
}

export default ListName