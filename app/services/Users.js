import AppConfig from 'appConfig';
import { callApiWithoutAuth } from 'utils/callApi';
import { getData } from 'utils/map';

export default {
  login: params =>
    callApiWithoutAuth(
      `${AppConfig.API_URI}/api/${AppConfig.API_VERSION}/users/login`,
      'POST',
      params,
    ).then(res => {
      const data = getData(res, {});
      return data;
    }),
  signup: params =>
    callApiWithoutAuth(
      `${AppConfig.API_URI}/api/${AppConfig.API_VERSION}/users/signup`,
      'POST',
      params,
    ),
};
