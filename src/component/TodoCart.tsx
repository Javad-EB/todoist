/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from "react";
import { getTodos } from "../api/todos";
import { Todo } from "../types/todo";
import Modal from "./Modal";
import UpdateTodo from "./UpdateTodo";
import { Link, useNavigate } from "react-router-dom";

const TodoCart = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState<Todo | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const data = await getTodos();
      setTodos(data);
    }
    getData();
  }, []);
  const handleEdit = (todo: Todo) => {
    setShow(!show);
    setEdit(todo);
  };
  const openModal = () => {
    const modal = document.getElementById("update_modal") as HTMLDialogElement;
    modal.showModal();
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">My Todos</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Todos</th>
              <th>Description</th>
              <th>Order</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        defaultChecked={todo.is_completed}
                      />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{todo.content}</div>
                        {/* <div className="text-sm opacity-50">{todo.id}</div> */}
                      </div>
                    </div>
                  </td>
                  <td>
                    {todo.description}
                    {/* <br />
                  <span className="badge badge-ghost badge-sm"></span> */}
                  </td>
                  <td>{todo.order}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => {
                        openModal;
                        navigate(`/todo/${todo.id}`);
                      }}
                    >
                      edit
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* {show && (
        <Modal>
          {edit?.content}
          <br />
          {edit?.description}
          <br />
          <button onClick={() => setShow(false)}>close</button>
        </Modal>
      )} */}
    </div>
  );
};

export default TodoCart;
