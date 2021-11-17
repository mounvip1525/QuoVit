import axios from 'axios'
const backend_url = 'http://localhost:8000/'

export const signUp = (user) => axios.post(`${backend_url}auth/signup`,user)
export const signIn = (user) => axios.post(`${backend_url}auth/signin`,user)

export const fetchPosts = (id) => axios.get(`${backend_url}posts/${id}`)
export const fetchSavedPosts = (id) => axios.get(`${backend_url}posts/saved/${id}`)
export const toggleSavePost = (postId,userId) => axios.put(`${backend_url}posts/saved/${userId}`,{postId})
export const likePost = (postId,userId) => axios.put(`${backend_url}posts/like/${postId}`,{userId})
export const dislikePost = (postId,userId) => axios.put(`${backend_url}posts/dislike/${postId}`,{userId})
export const addPost = (post,id) => axios.post(`${backend_url}posts/${id}`,post)

export const profileDetails = (id) => axios.get(`${backend_url}posts/profile/${id}`)
export const editProfileDetails = (id,body) => axios.put(`${backend_url}posts/profile/${id}`,body)
export const deletePost = (postId,userId) => axios.delete(`${backend_url}posts/${postId}/${userId}`)

export const followUser = (userId,followId) => axios.put(`${backend_url}user/follow/${userId}`,{userId:followId})
export const unfollowUser = (userId,followId) => axios.put(`${backend_url}user/unfollow/${userId}`,{userId:followId})
export const getSuggestedUsers = (id) => axios.get(`${backend_url}user/suggestions/${id}`)

export const fetchConfessions = () => axios.get(`${backend_url}confessions`)
export const addConfession = (newConfession) => axios.post(`${backend_url}confessions/add`,{confession:newConfession})

export const fetchFacultyReviews = () => axios.get(`${backend_url}facultyReviews`)
export const addFaculty = (newFaculty) => axios.post(`${backend_url}facultyReviews/add`,newFaculty)
export const rateFaculty = (id,rating) => axios.patch(`${backend_url}facultyReviews/rate/${id}`,{facultyRating:rating})

export const fetchCourses = () => axios.get(`${backend_url}questionBank`)
export const fetchPapersByCourse = (courseName) => axios.get(`${backend_url}questionBank/course/${courseName}`)
export const downloadPaper = (courseName,id) => axios.get(`${backend_url}questionBank/download/${courseName}/${id}`,{responseType: 'blob'})
export const uploadPaper = (courseName,courseCategory,examType,year,formData) => axios.post(`http://localhost:8000/questionBank/upload/${courseName}/${courseCategory}/${examType}/${year}`,formData)

export const fetchIdeas = () => axios.get(`${backend_url}ideasBlock/`)
export const addIdea = (idea,id) => axios.post(`${backend_url}ideasBlock/${id}`,idea)