import { Link } from "react-router-dom";

function NavbarItem(props) {
  return (
    <Link to={props.path} className="mx-2 px-4 py-2">
      <span className="font-medium">{props.name}</span>
    </Link>
  );
}

export default NavbarItem;
