import { isTokenExpried } from "#imports";
import { navigateTo } from "nuxt/app";

export default ProtectedRoute (()=> {
    if(process.server) return;

    const token = localStorage.getItem("tokebn");
    if(!token || isTokenExpried(token)){
        return navigateTo("/login")
    }

})