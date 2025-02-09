import axios from "axios";

export const trackAuthApiInstance = axios.create({
  baseURL: "https://accounts.spotify.com/api",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})