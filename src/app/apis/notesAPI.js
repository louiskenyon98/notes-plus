import axios from 'axios';
//Create axios instance and specify baseURL - modify this to change API endpoint.
export default axios.create({
    baseURL: 'http://localhost:3333'
})