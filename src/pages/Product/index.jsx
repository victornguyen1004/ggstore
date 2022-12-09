import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";
import ProductSection from "../../components/Product/ProductSection";
import products from "../../assets/products";

function Product() {
  return (
    <>
      <Navbar />
      <DefaultWrapper>
        <ProductSection products={products} title={"Browse Top-Selling Products"} button={false}/>
      </DefaultWrapper>
    </>
  );
}

export default Product;
