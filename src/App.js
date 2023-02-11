import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import ListName from "./pages/ListName";
import { useEffect } from "react";
import api from "./Api/api";
import urls from "./Api/urls";
import actionTypes from "./redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Edit from "./pages/Edit";






function App() {
  const {personalState}= useSelector(state=>state)
  
  const dispatch=useDispatch()


   useEffect(()=>{
    api.get(urls.personal)
    .then((res)=>{
      dispatch({type:actionTypes.personal.GET_NUMBER,payload:res.data}) })
    
    .catch((err)=>{ })
    console.log()

    




  },[])
  
  if(personalState.success=== false) 
 return "loading" 




  return (
    <> 




  
    
    
    <BrowserRouter>
    <Routes>
    
      
      <Route path="/home"  element={<Home/>} />
      <Route path="/list-name"  element={<ListName/>} />
      <Route path="/"  element={<Home/>} />
      <Route path="/edit/:bookId"  element={<Edit/>} />

      



    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
     </>
    

    
    
  );
}

export default App;
