const URL = {
  LOGIN: '/',
  GROUP: (userID: number | undefined = undefined) => (userID ? `/main?userID=${userID}` : '/main'),
  CHANNEL: (userID: number | undefined, channelType: string, id: number) => `/main?userID=${userID}&type=${channelType}&id=${id}`,
};

export { URL };
