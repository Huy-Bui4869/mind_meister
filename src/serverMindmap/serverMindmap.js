const API = process.env.NEXT_PUBLIC_API;

//Lấy danh sách mindmap theo email
export const getMindmapAllByEmail = async (email) => {
  const response = await fetch(`${API}?userEmail=${email}`, {
    mode: "no-cors",
  });
  const data = await response.json();
  return data;
};

//Tạo mindmap mới
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

//Update mindmap id
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

//Xóa mindmap
export const handleDeleteMindmap = async (id) => {
  const response = await fetch(`${NEXT_PUBLIC_API}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // mode: "no-cors",
  });

  return response.ok;
};
