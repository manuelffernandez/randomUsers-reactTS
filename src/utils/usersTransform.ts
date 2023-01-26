import { User, APIData } from '../interfaces';

const mapFromApiToUser = (apiUsers: APIData): Array<User> => {
  let usersArr: Array<User> = [];
  if (apiUsers instanceof Array) {
    usersArr = apiUsers.map(user => ({
      avatar: user.avatar,
      name: `${user.first_name} ${user.last_name}`,
      id: user.id,
      email: user.email,
    }));
  } else {
    usersArr.push({
      avatar: apiUsers.avatar,
      name: `${apiUsers.first_name} ${apiUsers.last_name}`,
      id: apiUsers.id,
      email: apiUsers.email,
    });
  }
  return usersArr;
};

export default mapFromApiToUser;
