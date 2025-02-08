import {  AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosHttpClient {
  constructor(private readonly axiosInstance: AxiosInstance) {}

  private handleError(error: unknown): never {
    if (error instanceof Error) {
      throw new Error(`AxiosHttpClient Error: ${error.message}`);
    }

    throw new Error("An unknown error occurred in AxiosHttpClient.");
  }

  async get<ResponseData>(url: string, config?: AxiosRequestConfig): Promise<ResponseData> {
    try {
      const response = await this.axiosInstance.get<ResponseData>(url, config)
      return response.data
    } catch (error) {
      console.log("AxiosHttpClient Get Error: ", error)
      this.handleError(error)
    }
  }

  async post<ResponseData>(url: string, payload: unknown, config?: AxiosRequestConfig): Promise<ResponseData> {
    try {
      const response = await this.axiosInstance.post<ResponseData>(url, payload, config)
      return response.data
    } catch (error) {
      console.log("AxiosHttpClient Post Error: ", error)
      this.handleError(error);
    }
  }
}