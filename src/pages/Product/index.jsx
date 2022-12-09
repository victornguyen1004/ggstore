import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";
import ProductSection from "../../components/Product/ProductSection";

function Product() {
  return (
    <>
      <Navbar />
      <DefaultWrapper>
        <ProductSection title={"Browse Top-Selling Products"} button={false}/>
      </DefaultWrapper>
    </>
  );
}

export default Product;
