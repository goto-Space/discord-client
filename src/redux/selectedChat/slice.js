import { createSlice } from '@reduxjs/toolkit';

const initState = null;

const { reducer: selectedChatReducer, actions } = createSlice({
  name: 'selectedChannel',
  initialState: initState,
  reducers: {
    setSelectedChat: (state, { payload: chat }) => chat,
    // eslint-disable-next-line no-unused-vars
    resetSelectedChat: (state) => initState,
  },
});

export const { setSelectedChat, resetSelectedChat } = actions;

export default selectedChatReducer;
