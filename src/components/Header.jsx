import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center text-lg font-bold space-x-5 my-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/coffee">All Coffee</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Header;
