/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { getTodoId, updateTodo } from "../api/todos";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTodo = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const openModal = () => {
    const modal = document.getElementById("update_modal") as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = async () => {
    const modal = document.getElementById("update_modal") as HTMLDialogElement;
    await updateTodo(id, content, desc);
    modal.close();
    navigate("/");
  };
  const [content, setContent] = useState("");
  const [desc, setDesc] = useState("");

  async function getData() {
    if (id) {
      const { data } = await getTodoId(id);
      setContent(data.Content);
      setDesc(data.description);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  if (!id) {
    throw new Error("we cant find id");
  }

  return (
    <>
      <button className="btn btn-info btn-sm" onClick={openModal}>
        Edit
      </button>
      {/* <dialog id="update_modal" className="modal">
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
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
      </dialog> */}
    </>
  );
};

export default UpdateTodo;
