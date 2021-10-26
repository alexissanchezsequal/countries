import axios from "axios"
import { endpoints } from "../config"

export function handler(err) {
  console.log("err", err)
  if (err.response && err.response.data) {
    return err.response.data
  }
  return { message: err.Error }
}

export const getAllCountries = async () => {
  try {
    const resp = await axios.get(endpoints.ALL)
    return resp.data
  } catch (e) {
    throw handler(e)
  }
}

export const getInfo = async (params) => {
  try {
    const resp = await axios.get(`${endpoints.NAME}/${params}`)
    return resp.data
  } catch (e) {
    throw handler(e)
  }
}

export const getBorder = async (params) => {
  try {
    const resp = await axios.get(`${endpoints.BORDER}/${params}`)
    return resp.data
  } catch (e) {
    throw handler(e)
  }
}
