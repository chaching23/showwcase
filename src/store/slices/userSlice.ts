import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    setName: (state, { payload }) => payload,
  },
});

const username = userSlice.reducer;
const setUserName = userSlice.actions.setName;

export { username, setUserName };
