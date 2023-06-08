import useSWRInfinite from 'swr/infinite';
import { API_URL } from '../utils/constants/index';

export const useChats = (id, options) => {
  const { data: chats, ...rest } = useSWRInfinite(
    API_URL.CHANNEL.GET_BY_PAGE(id ?? 0),
    options,
  );

  return { chats, ...rest };
};
