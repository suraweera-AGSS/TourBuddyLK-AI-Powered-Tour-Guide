import api from './axios';

export const getHotels = () => api.get('/hotels');
export const createHotel = (data) => api.post('/hotels', data);
export const updateHotel = (id, data) => api.put(`/hotels/${id}`, data);
export const deleteHotel = (id) => api.delete(`/hotels/${id}`);
