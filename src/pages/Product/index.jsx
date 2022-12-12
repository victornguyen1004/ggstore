import Navbar from "../../components/Navbar";
import DefaultWrapper from "../../components/Wrappers/Default";
import ProductSection from "../../components/Product/ProductSection";
import products from "../../assets/products";
import Footer from "../../components/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <DefaultWrapper>
        <ProductSection products={products} title={"Browse Top-Selling Products"} button={false} category={true} />
      </DefaultWrapper>
      <Footer />
    </>
  );
}

export default Product;
