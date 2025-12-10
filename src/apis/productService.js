import axiosClient from './axiosCilent';

const getProduct = async (query) => {
    const { sortType, page, limit } = query;
    const queryLimit = limit === 'all' ? '' : `limit=${limit}`;

    const res = await axiosClient.get(`/product?sortType=${sortType}&page=${page}&${queryLimit}`);

    return res.data;
};



export default getProduct;

