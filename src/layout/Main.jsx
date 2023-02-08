import { Link, Outlet } from "react-router-dom";
const Main = ({ corner }) => {
  return (
    <>
      <nav className="flex  justify-between p-2 content-center bg-orange-800">
        <Link className="text-white text-xl" to="/">
          Home
        </Link>
        {corner}
      </nav>
      <div className="container p-4 w-4/5 m-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
