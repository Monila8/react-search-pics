import axios from "axios"

const photosService = axios.create({
  baseURL: "https://api.unsplash.com",
  timeout: 5000,
  headers: {
    Authorization: "Client-ID jBkzqTwsHheF1MHDnb-vac3WTVzdyFEtrb4ZhsqjA58",
  },
})

export default photosService
