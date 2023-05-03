import axios from 'axios'

// const URL = 'http://localhost:8000';
const URL = 'https://crud-app-backend-qt8m.onrender.com';

export const addUser = async (data) => {
    try {
        const response = await axios.post(`${URL}/add`, data);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export const getAllUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log(error.message);
    }
}

export const EditUserById =  async (id, data) => {
    try {
        return await axios.put(`${URL}/edit/${id}`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async (id) => {
    try {
        return await axios.get(`${URL}/getUser/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        console.log(error.message);
    }
}