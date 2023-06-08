import { useSelector } from 'react-redux';

export const useSelectedChannel = () => useSelector((state) => state.selectedChannel);
