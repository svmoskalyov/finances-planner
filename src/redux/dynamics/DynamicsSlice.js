import { createSlice } from '@reduxjs/toolkit';
import {
  getDynamics,
  getDynamicsByMonth,
  postImage,
} from './dynamicsOperations';
import { logOutUser } from 'redux/auth/authOperations';

const initialState = {
  isLoading: false,
  error: null,
  statByYear: [
    {
      expense: 0,
      income: 0,
      month: '0',
    },
  ],
  statByMonth: {
    income: null,
    expense: null,
    accumulated: null,
    plan: null,
    planInProcent: null,
  },
  year: null,
  month: null,
  accumulatedProc: null,
  accumulatedUah: null,
  squareМeters: null,
  accumToOneMoreMeters: null,
  flatImage: null,
};

export const dynamicsSlice = createSlice({
  name: 'dynamics',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getDynamics.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDynamics.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(getDynamics.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(postImage.fulfilled, (state, { payload }) => {
        state.flatImage = payload.image;
      })
      .addCase(getDynamicsByMonth.fulfilled, (state, { payload }) => {
        state.statByMonth = payload;
      })
      .addCase(logOutUser.fulfilled, () => {
        return initialState;
      });
  },
});

export const dynamicsReducer = dynamicsSlice.reducer;
