import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

export const postLogout = async () => {
  const response = await fetch(API_URL.USER.POST_SIGN_OUT, postFetchOptions({}));
  return response.ok;
};
