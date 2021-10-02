import axios from 'axios'
const backend_url = 'http://localhost:8000/'

export const fetchConfessions = () => axios.get(`${backend_url}confessions`)