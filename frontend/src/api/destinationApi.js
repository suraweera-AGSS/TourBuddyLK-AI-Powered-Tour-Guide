import api from './axios';

export const getDestinations = () => api.get('/destinations');
export const createDestination = (data) => api.post('/destinations', data);
export const updateDestination = (id, data) => api.put(`/destinations/${id}`, data);
export const deleteDestination = (id) => api.delete(`/destinations/${id}`);
