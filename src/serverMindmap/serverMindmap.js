const API = process.env.NEXT_PUBLIC_API;

export const getMindmapAllByEmail = async (email) => {
  const response = await fetch(`${API}?userEmail=${email}`, {
    mode: "no-cors",
  });
  const data = await response.json();
  return data;
};

export const handleCreateMindmap = async (data) => {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

export const handleUpdateMindmap = async (id, data) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

export const handleDeleteMindmap = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
  });

  return response.ok;
};
