import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            {/* <li>
              <details>
                <summary>Todos</summary>
                <ul className="p-2">
                  <li>
                    <Link to={"/todos"}>Todos</Link>
                  </li>
                  <li>
                    <Link to={"/todos"}>My Todos</Link>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link to={"/todos"}>Todos</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Todo List
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          {/* <li>
            <details>
              <summary>Todos</summary>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-t-none">
                <li>
                  <Link to={"/todos"}>Todos</Link>
                </li>
                <li>
                  <Link to={"/todos"}>Completed</Link>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link to={"/todos"}>Todos</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
