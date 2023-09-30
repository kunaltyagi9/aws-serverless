import axios from 'axios';

const API_URL = "http://localhost:8000";

export const saveData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/save`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response.data;
    }
}

export const getData = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response.data;
    }
}