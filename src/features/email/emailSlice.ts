import { createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { Email } from "../../types/types";
import {
  getAllSchedules,
  getScheduleDetailAsync,
  addNewScheduleAsync,
  updateScheduleAsync,
  deleteScheduleAsync,
  searchScheduleAsync,
} from "./action";

export interface EmailState {
  allEmails: Email[];
  loading: boolean;
  error: string | undefined;
  detailSchedule: Email | object;
  searchTerm: string;
  searchResults: Email[];
  status: "loading" | "success" | "error";
}

const initialState: EmailState = {
  allEmails: [],
  loading: false,
  error: "",
  detailSchedule: {},
  searchTerm: "",
  searchResults: [],
  status: "success",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<EmailState>) => {
    builder
      // getAllSchedules
      .addCase(getAllSchedules.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllSchedules.fulfilled, (state, action) => {
        state.status = "success";
        state.allEmails = action.payload;
      })
      .addCase(getAllSchedules.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      //detailSchedule
      .addCase(getScheduleDetailAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getScheduleDetailAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.detailSchedule = action.payload;
      })
      .addCase(getScheduleDetailAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      // addNewScheduleAsync
      .addCase(addNewScheduleAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNewScheduleAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.allEmails.push(action.payload);
      })
      .addCase(addNewScheduleAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      // updateScheduleAsync
      .addCase(updateScheduleAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateScheduleAsync.fulfilled, (state, action) => {
        state.status = "success";
        const updatedData = action.payload;
        const index = state.allEmails.findIndex(
          (email) => email._id === updatedData._id
        );
        if (index !== -1) {
          state.allEmails[index] = updatedData;
        }
      })
      .addCase(updateScheduleAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      // deleteScheduleAsync
      .addCase(deleteScheduleAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteScheduleAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.allEmails = state.allEmails.filter(
          (email) => email._id !== action.payload._id
        );
      })
      .addCase(deleteScheduleAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      // searchScheduleAsync
      .addCase(searchScheduleAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchScheduleAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.searchResults = action.payload;
      })
      .addCase(searchScheduleAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default emailSlice.reducer;
