export const getEntries = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data.entries;
};

export const getCode = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data.code;
};

export const getData = (response, fallback) => {
  if (typeof response === 'undefined' || response === null) {
    return fallback;
  }
  return response.data;
};
