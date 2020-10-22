import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  if (error.response?.status === 401) {
    localStorage.clear()
    window.location.assign('/login')
  }

  return Promise.reject(error)
})

export const login = ({email, password}) => http.post('/login', {email, password})

export const logOut = () => http.post('/logout')

export const register = ({name, avatar, email, password, role}) => http.post('/register', {name, avatar, email, password, role})

export const activateUser = (token) => http.get(`/activate/${token}`)

// export const getTweets = () => http.get('/tweets')
