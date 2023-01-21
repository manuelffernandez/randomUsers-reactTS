import { GenericButton } from './index';
import { User } from '../interfaces';

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  const { user } = props;
  return (
    <div className='userCard'>
      <img className='userCard__avatar' src={user.avatar} alt='' />
      <div className='userCard__rightside'>
        <div className='userCard__rightside__info'>
          <p>Name: {user.name}</p>
          <p>Id: {user.id}</p>
          <p>E-mail: {user.email}</p>
        </div>
        <GenericButton
          addedClasses='userCard__rightside__btn'
          onClick={() => alert('hola')}>
          Add
        </GenericButton>
      </div>
    </div>
  );
};

export default UserCard;
