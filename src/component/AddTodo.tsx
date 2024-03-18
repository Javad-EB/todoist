/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, useState } from "react";
import { addTodo } from "../api/todos";
import { useNavigate } from "react-router-dom";
// import { Todo } from "../types/todo";
const AddTodo: FC = () => {
  const navigate = useNavigate();
  const openModal = () => {
    const modal = document.getElementById("add_modal") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = async () => {
    const modal = document.getElementById("add_modal") as HTMLDialogElement;
    modal.close();
    await addTodo(content, desc);
    setContent("");
    setDesc("");
    navigate("/");
  };
  const [content, setContent] = useState("");
  const [desc, setDesc] = useState("");
  //   const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <button className="btn btn-accent btn-wide" onClick={openModal}>
        Add a new todo
      </button>
      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add a new todo</h3>
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={closeModal}>
                Add
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddTodo;
