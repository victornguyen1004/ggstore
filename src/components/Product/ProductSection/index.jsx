import products from "../../../assets/products";
import ProductCategory from "./ProductCategory";
import ProductContainer from "./ProductContainer";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductSection(props) {

  function HandleButtonRender(props) {
    if (props.button) {
      return (
        <div className="mb-16 flex w-full justify-center">
          <Link
            to={"/product"}
            className="rounded-3xl border-2 border-blue-500 bg-blue-500 px-8 py-2 text-sm font-medium text-white shadow-md duration-300 ease-in-out hover:border-blue-500 hover:bg-white hover:text-blue-500"
          >
            Browse All Items
          </Link>
        </div>
      );
    }
  }

  return (
    <>
      <div className="mt-12">
        <div className="text-center text-2xl font-bold">{props.title}</div>
        <div className="mx-auto mt-4 w-[720px] text-center font-medium text-zinc-400">
          Whether you're recording a podcast, starting your DIY project, or
          doing a shoot, start with us. We do research for you so you can spend
          less time searching, and more time doing.
        </div>
        <ProductCategory />
        <ProductContainer>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                name={product.name}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            );
          })}
        </ProductContainer>
      </div>

      {HandleButtonRender(props)}
    </>
  );
}

export default ProductSection;
