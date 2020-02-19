import { USER_URL } from '../commons/constants/api-constants';
import axios from 'axios';
export const register = (user) => {
    return axios.post(USER_URL, user);
}