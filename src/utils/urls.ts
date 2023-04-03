const apiUrl =
  process.env.REACT_APP_ENVIRONMENT === 'dev'
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;

export const artUrl = `${apiUrl}/art`;
export const codeUrl = `${apiUrl}/code`;
