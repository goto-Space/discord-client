import { postFetchOptions } from './fetchOptions';
import { API_URL } from '../constants';

export const postSignIn = async (loginId: string, password: string) => {
  const response = await fetch(API_URL.USER.POST_SIGN_IN, postFetchOptions({ loginId, password }));
  const responseText = await response.text();

  return { status: response.status, responseText };
};
