import axios from 'axios';
import { BOOK_URL } from '../commons/constants/api-constants';
export function GetBooks(){
    return axios.get(BOOK_URL,{headers:{'x-access-token':localStorage.getItem('token')}});
}

export function CreateBooks(book){
    return axios.post(BOOK_URL, book, { headers: { 'x-access-token': localStorage.getItem('token') } });
}
export function DeleteBook(id){
    return axios.delete(`${BOOK_URL}/${id}`, { headers: { 'x-access-token': localStorage.getItem('token') } });
}