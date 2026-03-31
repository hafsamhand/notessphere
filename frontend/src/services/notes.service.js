import { api } from './api';

export const getNotes = (categoryId) => {
  return api.get(`/notes${categoryId ? `?categoryId=${categoryId}` : ''}`);
};

export const createNote = (data) => {
    data.categoryId = Number(data.categoryId);
    data.content = "test for now";
  return api.post('/notes', data);
};