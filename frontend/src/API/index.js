import axios from 'axios'
const backend_url = 'http://localhost:8000/'

export const fetchConfessions = () => axios.get(`${backend_url}confessions`)
export const addConfession = (newConfession) => axios.post(`${backend_url}confessions/add`,{confession:newConfession})

export const fetchFacultyReviews = () => axios.get(`${backend_url}facultyReviews`)
export const addFaculty = (newFaculty) => axios.post(`${backend_url}facultyReviews/add`,newFaculty)
export const rateFaculty = (id,rating) => axios.patch(`${backend_url}facultyReviews/rate/${id}`,{facultyRating:rating})