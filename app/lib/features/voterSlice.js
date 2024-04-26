import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addVoter, getVoter } from '../../utils/api';

export const fetchVoters = createAsyncThunk(
  'voters/fetchVoters',
  async (_, { getState }) => {
    const { auth } = getState();
    const authToken = auth.user?.token;
    const data = {
      "page": 1,
      "limit": 10
    }
    const response = await getVoter(data, authToken);
    return response.data;
  }
);

export const addVoterAsync = createAsyncThunk(
  'voters/addVoter',
  async (voterData, { getState }) => {
    const { auth } = getState();
    const authToken = auth.user?.token;
    const response = await addVoter(voterData, authToken);
    return response.data;
  }
);

const voterSlice = createSlice({
  name: 'voters',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVoters.fulfilled, (state, action) => {
        console.log('Fetched voters:', action.payload);
        return action.payload;
      })
      .addCase(addVoterAsync.fulfilled, (state, action) => {
        console.log('Added voter:', action.payload);
        return [...state, action.payload];
      });
  },
});

export const selectVoters = (state) => state.voters;
export default voterSlice.reducer;
