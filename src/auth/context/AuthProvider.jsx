import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"
import { types } from "../types/Types"

const initialState={
    logged:false,
}
const init=()=>{
  const user= JSON.parse(localStorage.getItem('user')) // si regresa null es porque no hay}
  return{
    logged: !!user,
    user:user,
  }}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer, initialState, init)

    const user={id:'ABC', name}

    const login = ( name='')=>{
      const action={
        type: types.login,
        payload: {
          id:'ABC',
          name: name,
        }
      }
      localStorage.setItem('user', JSON.stringify(user) )
      dispatch(action)
    }

    const logout =( name)=>{
      localStorage.removeItem("user");
      const action={ type: types.logout};
      dispatch(action);

    }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login:login, logout:logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
