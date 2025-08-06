import { use } from "react"
import AuthenticationContext from "../Firebase/AuthContext"

const useAuth = () =>{
    const data = use(AuthenticationContext)
    return data
}
export default useAuth