import { Iusers } from "./loginModal";

const baseUrl = 'https://jsonserver-drxg.onrender.com';

const users = `${baseUrl}/users`;


//получить всех users
export const getUsers = async () => {
  const respons = await fetch(`${users}`);
  return {
      item: await respons.json(),
      count: respons.headers.get('X-Total-Count'),
  };
};

// получаю User по id
export const getUser = async (id: number) => {
  const respons = await fetch(`${users}/${id}`);
  const user = await respons.json();
  return user;
};

// для дабавление элемента
export const createUser = async (body: Iusers) => {
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
