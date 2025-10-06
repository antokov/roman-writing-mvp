const JSON_HEADERS = { 'Content-Type': 'application/json' };

async function req(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: JSON_HEADERS,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status}`);
  return res.status === 204 ? null : res.json();
}

/* Projects */
export const getProject = (id) => req('GET', `/api/projects/${id}`);
export const listProjects = () => req('GET', `/api/projects`);
export const createProject = (payload) => req('POST', `/api/projects`, payload);
export const updateProject = (id, payload) => req('PUT', `/api/projects/${id}`, payload);
export const deleteProject = (id) => req('DELETE', `/api/projects/${id}`);

/* Chapters & Scenes */
export const listChapters = (pid) => req('GET', `/api/projects/${pid}/chapters`);
export const createChapter = (pid, payload) => req('POST', `/api/projects/${pid}/chapters`, payload);
export const updateChapter = (id, payload) => req('PUT', `/api/chapters/${id}`, payload);
export const deleteChapter = (id) => req('DELETE', `/api/chapters/${id}`);

export const listScenes = (cid) => req('GET', `/api/chapters/${cid}/scenes`);
export const createScene = (cid, payload) => req('POST', `/api/chapters/${cid}/scenes`, payload);
export const updateScene = (id, payload) => req('PUT', `/api/scenes/${id}`, payload);
export const deleteScene = (id) => req('DELETE', `/api/scenes/${id}`);

/* Characters */
export const listCharacters = (pid) => req('GET', `/api/projects/${pid}/characters`);
export const createCharacter = (pid, payload) => req('POST', `/api/projects/${pid}/characters`, payload);
export const updateCharacter = (id, payload) => req('PUT', `/api/characters/${id}`, payload);
export const deleteCharacter = (id) => req('DELETE', `/api/characters/${id}`);

/* ✅ World Items */
export const listWorldItems = (pid) => req('GET', `/api/projects/${pid}/world-items`);
export const createWorldItem = (pid, payload) => req('POST', `/api/projects/${pid}/world-items`, payload);
export const updateWorldItem = (id, payload) => req('PUT', `/api/world-items/${id}`, payload);
export const deleteWorldItem = (id) => req('DELETE', `/api/world-items/${id}`);
