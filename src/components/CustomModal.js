import React from 'react'

function customModal({message,button,buton,onCancel=()=>{} ,onconfirm=()=>{}}) {
  return (
    <div style={{height:"100vh",top:"0",left:"0",
    width:"100vw",
    
   
    position:"absolute",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
    
    
    
    }}><div style={{width:"400px",height:"270px",backgroundColor:"rgba(238 ,238 ,0,1)",alignItems:"center",
    justifyContent:"center",color:"green",
    display:"flex", flexDirection:"column",borderRadius:"10px"
    }}> <div style={{}}> <h1> {message}</h1>  </div> 
   <div style={{padding:"10px",}}> 
    <button  
    onClick={onconfirm} 
    style={{padding:"6px", 
     margin:"0 30px",
     backgroundColor:"blue",
     color:"white",border:"none",
    borderRadius:"5px",width:"70px"}}> {button} </button>

    <button onClick={onCancel} style={{padding:"6px",  margin:"0 30px",backgroundColor:"red",color:"white",border:"none",
    borderRadius:"5px",width:"70px"}}>{buton} </button>
         </div>
    
    </div>







    </div>
  )
}

export default customModal