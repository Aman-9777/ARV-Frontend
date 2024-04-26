"use client"
import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: 'companies',
  initialState: [],
  reducers: {
    setCompanies(state, action) {
      return action.payload;
    },
  },
});

export const { setCompanies } = companySlice.actions;

export const selectCompanies = (state) => state.companies;
export default companySlice.reducer;
