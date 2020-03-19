import { LOGIN_URL } from '../commons/constants/api-constants';
import axios from 'axios';
export const  userLogin = (user) => {
    return axios.post(LOGIN_URL, user)
}