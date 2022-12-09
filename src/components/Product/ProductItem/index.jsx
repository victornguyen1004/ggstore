import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
      <Link to={""} className="col-span-3 rounded-2xl bg-white border shadow-md hover:shadow-lg duration-300 overflow-hidden group ease-in-out">
        <img src={props.image} alt="" className="h-52 w-full object-contain group-hover:scale-105 duration-300 ease-in-out" />
        <div className="py-2 px-4 text-sm font-medium">
          <div className="text-zinc-400">{props.name}</div>
          <div className="mt-1 flex justify-between">
            <span className="font-semibold text-sm">${props.price}</span>
            <span className="">
              <span className="">{props.rating}</span>
              <i className="fa-solid fa-star ml-1 text-yellow-400"></i>
            </span>
          </div>
        </div>
      </Link>
  );
}

export default ProductItem;
