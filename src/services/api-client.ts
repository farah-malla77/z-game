import axios from "axios";
// get api from Rawg.io website
export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params:{
        key:'74922d5964064223bfb710429b2cf69e'
    }
})