import { createSlice } from '@reduxjs/toolkit';

const initState = {
  loginId: '',
  name: '',
};

const { reducer: selectedUserReducer, actions } = createSlice({
  name: 'selectedUser',
  initialState: initState,
  reducers: {
    setSelectedUser: (
      state,
      { payload: { loginId, name } },
    ) => ({
      loginId,
      name,
    }),
  },
});

export const { setSelectedUser } = actions;

export default selectedUserReducer;
