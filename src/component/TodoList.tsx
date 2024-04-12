/* eslint-disable jsx-a11y/label-has-associated-control */
import { Key, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../api/todos";
import { setEditTodo } from "../store/slices/todosSlice";
import Loading from "./Loading";
import EditTodo from "./EditTodo";
import { useLocation, useParams } from "react-router-dom";
import TodoCard from "./TodoCard";
const TodoList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let location = useLocation();
  const add = location.pathname.endsWith("add");
  const query = useQuery({
    queryKey: id ? ["Todo", id] : ["Todo"],
    queryFn: getTodo,
  });
  useEffect(() => {
    if (query.data && id) {
      dispatch(setEditTodo(query.data));
    }
  }, [query.data, id]);

  return (
    <div>
      <h1 className="my-2 text-5xl font-bold">My Todos</h1>
      {query.isLoading && <Loading />}
      {query.isError && (
        <div className="p-10 text-center text-5xl text-red-600">
          Error fetching data
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Todos</th>
              <th>Description</th>
              <th className="text-center">Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!id &&
              query?.data?.map((todo: { id: Key | null | undefined }) => {
                return <TodoCard todo={todo} key={todo.id} />;
              })}
          </tbody>
        </table>
      </div>
      {(id || add) && <EditTodo add={add} />}
    </div>
  );
};

export default TodoList;
