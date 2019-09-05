import { callApiWithAuth } from 'utils/callApi';
import AppConfig from 'appConfig';
import { getData } from 'utils/map';

export default {
  getAll: params =>
    callApiWithAuth(
      `/${AppConfig.API_URI}/api/${AppConfig.API_VERSION}/relationships`,
      'GET',
      null,
    ).then(res => {
      const data = getData(res, []);
      return data;
    }),
};
