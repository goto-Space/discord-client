import { API_URL } from '../utils/constants/index';
import useSWRInfinite from 'swr/infinite';

export const useChats = (id, options) => {
  const { data: chats, ...rest } = useSWRInfinite(
    API_URL.CHANNEL.GET_BY_PAGE(id ?? 0),
    options,
  );

  return { chats, ...rest };
};
