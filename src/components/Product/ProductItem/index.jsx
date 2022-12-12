import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <Link
      to={""}
      className="group col-span-6 overflow-hidden rounded-2xl border bg-white shadow-md duration-300 ease-in-out hover:shadow-lg md:col-span-4 lg:col-span-3"
    >
      <img
        src={props.image}
        alt=""
        className="h-52 w-full object-contain duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="py-2 px-4 text-sm font-medium">
        <div className="text-zinc-400">{props.name}</div>
        <div className="mt-1 flex justify-between">
          <span className="text-sm font-semibold">${props.price}</span>
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
