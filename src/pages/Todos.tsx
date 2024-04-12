/* eslint-disable jsx-a11y/label-has-associated-control */
import AddTodo from "../component/AddTodo";
import TodoList from "../component/TodoList";

const Todos = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex flex-col text-center">
        <TodoList />
        <AddTodo />
      </div>
    </div>
  );
};

export default Todos;
