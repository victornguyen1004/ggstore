import Product from "../pages/Product";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const publicRoutes = [
  { name: "Trang chủ", path: "/", component: <Home /> },
  { name: "Về chúng tôi", path: "/about", component: <About /> },
  { name: "Cửa hàng", path: "/product", component: <Product /> },
  { name: "Liên hệ", path: "/contact", component: <Contact /> },
];

export { publicRoutes };