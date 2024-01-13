import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllScheduleService,
  getScheduleDetailService,
  addScheduleService,
  updateScheduleService,
  deleteScheduleService,
  searchScheduleService,
} from "../../services/apiUrls";

export const getAllSchedules = createAsyncThunk(
  "schedules/getAllSchedules",
  async () => {
    const response = await getAllScheduleService();
    return response.data.data;
  }
);

export const getScheduleDetailAsync = createAsyncThunk(
  "schedules/getScheduleDetailAsync",
  async (id: string) => {
    const response = await getScheduleDetailService(id);
    return response.data.data;
  }
);

export const addNewScheduleAsync = createAsyncThunk(
  "schedules/addNewScheduleAsync",
  async (ScheduleData: object) => {
    const response = await addScheduleService(ScheduleData);
    return response.data.data;
  }
);

export const updateScheduleAsync = createAsyncThunk(
  "schedules/updateScheduleAsync",
  async ({ id, scheduleData }: { id: string; scheduleData: object }) => {
    const response = await updateScheduleService(id, scheduleData);
    return response.data.data;
  }
);

export const deleteScheduleAsync = createAsyncThunk(
  "schedules/deleteScheduleAsync",
  async (id: string) => {
    const response = await deleteScheduleService(id);
    return response.data.data;
  }
);

export const searchScheduleAsync = createAsyncThunk(
  "schedules/searchScheduleAsync",
  async (searchQuery: string) => {
    const response = await searchScheduleService(searchQuery);
    return response.data.data;
  }
);
