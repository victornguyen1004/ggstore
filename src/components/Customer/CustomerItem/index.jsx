import { Link } from "react-router-dom";

function CustomerItem(props) {
    return (
      <Link to={""} className="col-span-3">
        <img src={props.image} alt="" className="w-full object-contain h-[100px]" />
      </Link>
    );
}

export default CustomerItem;