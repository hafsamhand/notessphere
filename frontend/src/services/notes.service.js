import { api } from './api';

export const getNotes = (categoryId) => {
  return api.get(`/notes${categoryId ? `?categoryId=${categoryId}` : ''}`);
};

export const createNote = (data) => {
    data.categoryId = Number(data.categoryId);
    data.content = "test for now";
  return api.post('/notes', data);
};

export const updateNote = (id, data) => {
  return api.patch(`/notes/${id}`, data);
};

export const deleteNote = (id) => {
  return api.delete(`/notes/${id}`);
};