const baseUrl = 'https://jsonserver-drxg.onrender.com';

const users = `${baseUrl}/users`;

interface Iusers{
  id?: number;
  username: string,
  email: string,
  password: string,
}

// получаю одну машину по id
export const getCar = async (id: number) => {
  const respons = await fetch(`${users}/${id}`);
  const user = await respons.json();
  return user;
};

// для дабавление элемента
export const createCar = async (body: Iusers) => {
  const respons = await fetch(`${users}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
  });
  const user = await respons.json();

  return user;
};
