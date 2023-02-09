import actionTypes from "../actions/actionTypes";
const initialState= {success:"false",
                     pending:"false",
                     error:"false",
                     personal:[]
}


const personalReducer=(state=initialState,action)=>{


       switch (action.type) {

        case actionTypes.personal.ADD_NUMBER:
           return {...state,
            success:true,
            pending:false,
            error:false,
            personal:[ ...state.personal,action.payload  ]
            };
            
            case actionTypes.personal.GET_NUMBER:
           return {...state,
            success:true,
            pending:false,
            error:false,
            personal:action.payload  
            };

            case actionTypes.personal.DELETE_PERSONAL:
              let filteredPersonal= state.personal.filter(item=> item.id !== action.payload)
              console.log(action.payload)
              return { ...state,
                     success:true,
                     pending:false,
                     error:false,
                     personal:filteredPersonal
              
              
              
              } 

            default:
            return state
       }


    

}
export default personalReducer
