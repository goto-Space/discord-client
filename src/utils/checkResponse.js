const checkLogin = (status: number, responseMessage: string): string => {
  if (status !== 200) {
    return responseMessage;
  }
  return '';
};

export { checkLogin };
