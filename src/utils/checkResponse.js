const checkLogin = (status, responseMessage) => {
  if (status !== 200) {
    return responseMessage;
  }
  return '';
};

export { checkLogin };
