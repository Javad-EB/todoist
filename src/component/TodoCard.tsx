import { useNavigate } from "react-router-dom";
import { Todo } from "../types/todo";

const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  const handleEdit = (todo: Todo) => {
    navigate(`/todos/${todo.id}`);
  };
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{todo.content}</div>
          </div>
        </div>
      </td>
      <td>{todo.description}</td>
      <td>{todo.id}</td>
      <th>
        <button
          className="btn btn-ghost btn-outline btn-sm"
          onClick={() => {
            handleEdit(todo);
          }}
        >
          edit
        </button>
      </th>
    </tr>
  );
};

export default TodoCard;
