import axios from 'axios';
import { User } from '../CRUDEnterDatas';

const api = axios.create({
  baseURL: 'https://app-django-musica.onrender.com',
});

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get('https://app-django-musica.onrender.com/Urls/ViewsStudy/');
  if (Array.isArray(response.data)) {
    return response.data;
  } else {
    console.error('API response is not an array:', response.data);
    return [];
  }
};

export const updateUser = async (user: User): Promise<User> => {
  const response = await api.put(`https://app-django-musica.onrender.com/Urls/ViewsStudy/${user.id}`, user);
  return response.data;
};
