import axios from "axios";
import { logout } from "./auth";

const api = axios.create({ baseURL: 'http://localhost:3000' })

api.interceptors.response.use(
    function (response) {
        return response
    }, 
    function (error) {
        if (error.response?.status == 401) {
            logout()
            return error
        }
    }
);
            
export default api;