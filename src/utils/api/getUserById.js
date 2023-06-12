import { API_URL } from '../constants';

// eslint-disable-next-line max-len
export const getUserById = (userId: number) => fetch(API_URL.USER.GET_USER_BY_ID(userId));
