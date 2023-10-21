import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      {/* We have access to isActive property if we use <NavLink/>, we can use <Link/> aswell, they both work the same */}
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        to={"about"}
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to={"products"}
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to={"dashboard"}
        style={({ isActive }) => {
          return { color: isActive ? "red" : "black" };
        }}
      >
        Protected Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
