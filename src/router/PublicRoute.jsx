import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth"

export const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContext);

  return (!logged) ? children: <Navigate to='/marvel'></Navigate>
  //no este logueado muestre 
  //si esta logueado y pone rutas publicas que no lo renderize
}
