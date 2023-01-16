import GenericButton from './GenericButton';

const UserCard = () => {
  return (
    <div className='userCard'>
      <img
        className='userCard__avatar'
        src='https://robohash.org/molestiaeofficiiset.png?size=300x300&set=set1'
        alt=''
      />
      <div className='userCard__info'>
        <p>Nombre</p>
        <p>Id</p>
        <p>Mail</p>
      </div>
      <GenericButton
        addedClasses='userCard__addbtn'
        onClick={() => alert('hola')}>
        Agregar
      </GenericButton>
    </div>
  );
};

export default UserCard;
