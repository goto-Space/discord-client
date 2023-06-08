import { useSelector } from 'react-redux';

export const useSelectedChat = () => useSelector((state) => state.selectedChat);
