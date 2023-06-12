import { API_URL } from '../constants';

export const getUserId = (loginId: string) => fetch(API_URL.USER.GET_USER_ID(loginId));
