import { GenericButton } from './index';
import { User } from '../interfaces';

interface UserCardProps {
  user: User;
  btnType: {
    title: string;
    funct: (u: User) => void;
  };
}

const UserCard = (props: UserCardProps) => {
  const { user, btnType } = props;

  return (
    <li className='userCard'>
      <img className='userCard__avatar' src={user.avatar} alt='' />
      <div className='userCard__rightside'>
        <div className='userCard__rightside__info'>
          <p>Name: {user.name}</p>
          <p>Id: {user.id}</p>
          <p>E-mail: {user.email}</p>
        </div>
        <GenericButton
          addedClasses='userCard__rightside__btn'
          onClick={() => btnType.funct(user)}>
          {btnType.title}
        </GenericButton>
      </div>
    </li>
  );
};

export default UserCard;
