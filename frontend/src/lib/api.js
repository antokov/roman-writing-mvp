import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
})

export const listProjects = () => api.get('/projects').then(r => r.data)
export const createProject = (payload) => api.post('/projects', payload).then(r => r.data)
export const getProject = (id) => api.get(`/projects/${id}`).then(r => r.data)
export const updateProject = (id, payload) => api.put(`/projects/${id}`, payload).then(r => r.data)
export const deleteProject = (id) => api.delete(`/projects/${id}`).then(r => r.data)

export const listChapters = (pid) => api.get(`/projects/${pid}/chapters`).then(r => r.data)
export const createChapter = (pid, payload) => api.post(`/projects/${pid}/chapters`, payload).then(r => r.data)
export const getChapter = (id) => api.get(`/chapters/${id}`).then(r => r.data)
export const updateChapter = (id, payload) => api.put(`/chapters/${id}`, payload).then(r => r.data)
export const deleteChapter = (id) => api.delete(`/chapters/${id}`).then(r => r.data)

export const listScenes = (chapterId) => api.get(`/chapters/${chapterId}/scenes`).then(r => r.data)
export const createScene = (chapterId, payload) => api.post(`/chapters/${chapterId}/scenes`, payload).then(r => r.data)
export const getScene = (id) => api.get(`/scenes/${id}`).then(r => r.data)
export const updateScene = (id, payload) => api.put(`/scenes/${id}`, payload).then(r => r.data)
export const deleteScene = (id) => api.delete(`/scenes/${id}`).then(r => r.data)

// Characters
export const listCharacters = (pid) => api.get(`/projects/${pid}/characters`).then(r => r.data)
export const createCharacter = (pid, payload) => api.post(`/projects/${pid}/characters`, payload).then(r => r.data)
export const getCharacter = (id) => api.get(`/characters/${id}`).then(r => r.data)
export const updateCharacter = (id, payload) => api.put(`/characters/${id}`, payload).then(r => r.data)
export const deleteCharacter = (id) => api.delete(`/characters/${id}`).then(r => r.data)

// Locations (World)
export const listLocations = (pid) => api.get(`/projects/${pid}/locations`).then(r => r.data)
export const createLocation = (pid, payload) => api.post(`/projects/${pid}/locations`, payload).then(r => r.data)
export const getLocation = (id) => api.get(`/locations/${id}`).then(r => r.data)
export const updateLocation = (id, payload) => api.put(`/locations/${id}`, payload).then(r => r.data)
export const deleteLocation = (id) => api.delete(`/locations/${id}`).then(r => r.data)
