/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate, useParams } from "react-router-dom";
import { getTodoId, updateTodo } from "../api/todos";
import { useEffect, useState } from "react";

const Todo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  async function getData() {
    if (id) {
      const data = await getTodoId(id);
      setContent(data.content);
      setDescription(data.description);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  if (!id) {
    throw new Error("We cant find id");
  }

  const openModal = () => {
    const modal = document.getElementById("update_modal") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = async () => {
    const modal = document.getElementById("update_modal") as HTMLDialogElement;
    await updateTodo(id, content, description);
    modal.close();
    navigate("/");
  };

  return (
    <div className="space-x-4">
      <button className="btn btn-info btn-sm" onClick={openModal}>
        Edit
      </button>
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Todo</h3>
          <p className="py-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Todo content</span>
              </div>
              <input
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Todo description</span>
              </div>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <input
        className="p-2"
        placeholder=""
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="p-2"
        placeholder=""
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-blue-700 p-2 text-white"
        onClick={async () => {
          await updateTodo(id, content, description);
          navigate("/");
        }}
      >
        SAVE
      </button>
    </div>
  );
};

export default Todo;
