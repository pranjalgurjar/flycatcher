import axios from "axios";
const url = process.env.REACT_APP_BASE_URL;

const axiosClient = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': "application/json"
    }
})

export default axiosClient;