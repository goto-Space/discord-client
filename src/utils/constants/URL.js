const URL = {
  LOGIN: '/',
  GROUP: (groupID: number | undefined = undefined) => (groupID ? `/main?group=${groupID}` : '/main'),
  CHANNEL: (userID: number | undefined, channelType: string, id: number) => `/main?userID=${userID}&type=${channelType}&id=${id}`,
};

export { URL };
