import axios from "axios";

const instance = axios.create({
    baseURL: window.API_URL
})

export default instance