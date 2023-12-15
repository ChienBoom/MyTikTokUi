import axios from 'axios';

const Request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const getApi = async (pathApi, params = {}) => {
    const response = await Request.get(pathApi, params);
    return response.data;
};
export default Request;
