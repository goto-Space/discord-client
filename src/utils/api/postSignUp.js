import { API_URL } from '../constants/index';
import { postFetchOptions } from './fetchOptions';

export const postSignUp = async (loginId: string, userName: string, password: string) => {
  const response = await fetch(
    API_URL.USER.POST_SIGN_UP,
    postFetchOptions({ loginId, userName, password }),
  );
  const responseText = await response.text();

  return { status: response.status, responseText };
};
