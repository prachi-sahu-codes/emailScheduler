import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Email } from "../../types/types";

export interface EmailState {
  allEmails: Email[];
  loading: boolean;
}

const initialState: EmailState = {
  allEmails: [],
  loading: false,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { loading } = emailSlice.actions;

export default emailSlice.reducer;
