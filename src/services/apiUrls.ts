import axios from "axios";

const baseURL = "https://schedule-backend-kxmw.onrender.com/schedules"

export const getAllScheduleService = () => axios.get(`${baseURL}`);

export const getScheduleDetailService = (id: string) =>
  axios.get(`${baseURL}/${id}`);

export const addScheduleService = (data: object) =>
  axios.post(`${baseURL}`, data);

export const updateScheduleService = (id: string, data: object) =>
  axios.post(`${baseURL}/${id}`, data);

export const deleteScheduleService = (id: string) =>
  axios.delete(`${baseURL}/${id}`);

export const searchScheduleService = (searchQuery: string) =>
  axios.get(`${baseURL}?search=${searchQuery}`);
