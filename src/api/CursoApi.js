import axios from "axios";

const cursoAPI = axios.create({
    baseURL:'https://docademi-test-default-rtdb.firebaseio.com'
})

export default cursoAPI