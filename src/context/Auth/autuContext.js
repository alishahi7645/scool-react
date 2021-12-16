import react from "react";
import { useReducer } from "react/cjs/react.development";
export const Authcontext = react.createContext();
const AuthcontextProvider =(props)=>{
    const authReducer =(state , action)=>{
        switch (action.type) {
            case 'login':{
                const userInfo={
                    username:action.payload,
                    authenticated:true
                }
                localStorage.setItem('user',JSON.stringify(userInfo))
                return{authenticated:true}
            }
                
            case 'logout':{
                localStorage.removeItem('user')
                break;
            }
                
            default:
                return state;
                
        }
    }
    const[authenticated,dispatch]=useReducer(authReducer,false);

    return(
        <Authcontext.Provider value={{authenticated,dispatch}}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default AuthcontextProvider;