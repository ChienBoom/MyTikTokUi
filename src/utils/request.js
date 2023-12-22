import axios from 'axios';

const Request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const getApi = async (pathApi, params = {}) => {
    const response = await Request.get(pathApi, params);
    return response.data;
};
export default Request;
