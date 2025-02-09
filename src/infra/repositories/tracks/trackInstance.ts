import axios from "axios";

export const trackApiInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: "Bearer "
  }
})
