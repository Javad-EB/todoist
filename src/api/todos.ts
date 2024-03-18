const URL = import.meta.env.VITE_URL_TODO;
const TOKEN = import.meta.env.VITE_TOKEN;
async function getTodos() {
  const res = await fetch(`${URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data;
}

async function getTodoId(id: string) {
  const res = await fetch(`${URL}/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
}

async function addTodo(content: string, description: string) {
  const res = await fetch(`${URL}/tasks`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, description }),
  });
  const data = await res.json();
  return data;
}

async function updateTodo(id: string, content: string, description: string) {
  const res = await fetch(`${URL}/tasks/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, description }),
  });
  const data = await res.json();
  return data;
}

export { getTodos, addTodo, getTodoId, updateTodo };
