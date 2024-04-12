import { useDispatch, useSelector } from "react-redux";
import FormField from "./FormFields";
import Modal from "./Modal";
import {
  selectEditTodo,
  setEditTodo,
  setValidationErrors,
  clearEditTodo,
} from "../store/slices/todosSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodoId, updateTodo } from "../api/todos";
import { Todo } from "../types/todo";
import { UpdateTodoFormData } from "../types/interface";
import { showToast } from "../utils/toast";
import { TodoSchema } from "../types/form";

const EditTodo = ({ add }: { add: boolean }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const editTodo = useSelector(selectEditTodo);
  const navigate = useNavigate();
  const { id } = useParams();
  const mutation = useMutation<Todo, Error, UpdateTodoFormData>({
    mutationFn: add ? addTodo : updateTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["Todo"] });
      const previousTodos = queryClient.getQueryData(["Todo"]);
      if (add) {
        queryClient.setQueryData(["Todo"], (old) => [...old, newTodo]);
      } else {
        queryClient.setQueryData(["Todo"], (old) =>
          old.map((item) => {
            if (item.id === id) return { ...newTodo };
            return item;
          }),
        );
      }
      navigate("/todos");
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["Todo"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["Todo"] });
      dispatch(clearEditTodo());
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      setEditTodo({
        [name]: value,
      }),
    );
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());
    if (!editTodo) return;
    formData.id = id as string;
    const parsed = TodoSchema.safeParse(formData);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      showToast("error", `${issue.message}`);
      const formattedErrors = parsed.error.issues.reduce(
        (acc, issue) => ({ ...acc, [issue.path[0]]: issue.message }),
        {},
      );
      dispatch(setValidationErrors(formattedErrors));
    }
    await mutation.mutateAsync(parsed.data);
    // showToast("success", "Todo editing done successfully!");
  };
  const handleDelete = async () => {
    if (editTodo) {
      deleteTodoId(editTodo.id);
      dispatch(clearEditTodo());
      queryClient.invalidateQueries({ queryKey: ["Todo"] });
      showToast("error", "Todo deleted successfully!");
      navigate("/todos");
    }
  };

  return (
    <div>
      <Modal>
        <div className="modal-box w-96">
          <form onSubmit={handleSave}>
            <p className="py-4">
              <label htmlFor="content" className="form-control w-full max-w-xs">
                {!add && (
                  <div className="label">
                    Edit id: <b>{editTodo?.id}</b>
                    <span className="label-text-alt">
                      <button
                        className="btn btn-error btn-xs"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                )}
                <FormField
                  type="text"
                  placeholder="Content"
                  name="content"
                  value={editTodo?.content}
                  onChange={handleChange}
                  className="input input-bordered m-4 w-full max-w-xs"
                />
                <FormField
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={editTodo?.description}
                  onChange={handleChange}
                  className="input input-bordered m-4 w-full max-w-xs"
                />
              </label>
            </p>
            <div className="flex justify-around">
              <button
                className="btn btn-warning"
                onClick={() => {
                  dispatch(clearEditTodo());
                  showToast("warning", "Edits todo canceled");
                  navigate("/todos");
                }}
              >
                close
              </button>
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default EditTodo;
