import {
  UsersQty,
  getUsersReturn,
  KeyValueParam,
  APIUser,
} from '../interfaces';

const API_URL: URL = new URL(
  'https://random-data-api.com/api/v2/users?is_json=true&size=5'
);

const setURLParams = (KeyValueParams: Array<KeyValueParam>): void => {
  KeyValueParams.forEach(KeyValueParam => {
    API_URL.searchParams.set(KeyValueParam.paramKey, KeyValueParam.paramValue);
  });
};

const getUsers = (userQty: UsersQty): Promise<getUsersReturn> => {
  setURLParams([{ paramKey: 'size', paramValue: userQty.toString() }]);

  return fetch(API_URL)
    .then((res: Response): Promise<Array<APIUser>> | never => {
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return res.json();
    })
    .then(APIUsers => {
      return {
        isOk: true,
        data: APIUsers,
      };
    })
    .catch((err: Error) => {
      return {
        isOk: false,
        data: err.message,
      };
    });
};

const fetchData = { getUsers };

export default fetchData;
