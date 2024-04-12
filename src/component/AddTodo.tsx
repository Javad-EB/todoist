import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AddTodo = () => {
  return (
    <>
      <Link to="/todos/add" className="btn btn-accent btn-wide">
        Add a new todo
      </Link>
      <ToastContainer />
    </>
  );
};

export default AddTodo;
