import axios from "axios";

export const trackApiInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: "Bearer "
  }
})

export const trackAuthApiInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})