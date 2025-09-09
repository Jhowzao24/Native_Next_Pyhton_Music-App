import axios from 'axios';
import { User } from '../CRUDEnterDatas';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/Urls/ViewsStudy/',
  });
  
  export const fetchUsers = async (): Promise<User[]> => {
    const response = await api.get('http://127.0.0.1:8000/Urls/ViewsStudy/');
    if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error('API response is not an array:', response.data); // Adicione esta linha para depuração
        return [];
      }
  };
  
  export const updateUser = async (user: User): Promise<User> => {
    const response = await api.put(`http://127.0.0.1:8000/Urls/ViewsStudy/${user.id}`, user);
    return response.data;
  };