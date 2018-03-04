import config from '../config';

export const validateServerUrl = url => {
  // const validUrl = /^https:\/\/\w+/;
  const validUrl = new RegExp(`^${config.API_PROTOCOL}://\\w+`);
  const notSecureUrl = /^http:\/\/\w+/;

  if (!url || validUrl.test(url)) {
    return { error: null };
  }
  if (notSecureUrl.test(url)) {
    return { error: 'Only secure https protocol is supported' };
  }
  return { error: 'Invalid url' };
};
