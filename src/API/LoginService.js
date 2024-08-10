import axios from "axios";

export let backendUrl ='http://localhost:9090';

const axiosApi = axios.create({
    baseURL: backendUrl , headers: {'Content-Type': 'application/json'}
})

export default class LoginService {
    static async login(email, password) {
        return axiosApi.get("/login", {
            auth: {
                username: email, password: password
            }
        })
    }
}