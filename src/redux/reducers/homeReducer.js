import actionTypes from "../actions/actionTypes";

const initialState={ home:[]}
const homeReducer=(state=initialState,action)=>{
    switch  (action.type) {
        case actionTypes.home.ADD_NUMBER:
            
   return{...state,
    success:true,
    home:action.payload};
    
   

        
   
            
            
            
    
        default:
           return state;
    }






}
export default homeReducer