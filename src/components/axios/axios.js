import axios from "axios";

const instance = axios.create({
    baseURL:'https://spmsliit.herokuapp.com/api/'
})

export default instance;