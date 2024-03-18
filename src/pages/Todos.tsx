/* eslint-disable jsx-a11y/label-has-associated-control */
import AddTodo from "../component/AddTodo";
import TodoCart from "../component/TodoCart";

const Todos = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero-content flex flex-col text-center">
        <TodoCart />
        <AddTodo />
      </div>
    </div>
  );
};

export default Todos;
