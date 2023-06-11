import { API_URL } from '../constants/index';
import { postFetchOptions } from './fetchOptions';

export const postSignUp = async (loginID: string, username: string, password: string) => {
  const response = await fetch(
    API_URL.USER.POST_SIGN_UP,
    postFetchOptions({ loginID, username, password }),
  );
  const responseText = await response.text();

  return { status: response.status, responseText };
};
