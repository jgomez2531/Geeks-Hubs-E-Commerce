export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const replaceDotWithComma = (str) => {
  return str.toString().replace(/\./g, ',');
};
