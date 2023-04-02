import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f44c43c2f47b4ac68eef59dd4f96c8bd'
    }
})