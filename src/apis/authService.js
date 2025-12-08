import axiosClient from './axiosCilent';

const register = async (body) => {
    return await axiosClient.post('/register', body);
};
const signIn = async (body) => {
    return await axiosClient.post('/login', body);
};
const getInfo = async () => {
    return await axiosClient.get('/user/info/7335322f-801b-45a2-a01e-5a4f223527ec');
};
export { register, signIn, getInfo };
