const getUsers = async (userQty: number) => {
  const user = await fetch(
    `https://random-data-api.com/api/v2/users?size=${userQty}&is_json=true`
  )
    .then(prod => prod.json())
    .catch(err => {
      throw new Error(err);
    });

  console.log(user);
};

const fetchData = {getUsers}

export default fetchData
