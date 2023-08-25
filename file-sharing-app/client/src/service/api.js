import axios from 'axios';

const headers = {
    "Content-Type": "multipart/form-data"
}

const API_URI = 'http://localhost:8000';

export const getSignedUrl = async (data) => {
    try {
        const response = await axios.get(`${API_URI}/image-url`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return error.response.data;
    }
}

export const uploadFile = async (url, file) => {
    try {
        const response = await axios.put(url, file, { headers: headers });
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return error.response.data;
    }
}