import Product from "../pages/Product";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const publicRoutes = [
  { name: "HOME", path: "/", component: <Home /> },
  { name: "ABOUT US", path: "/about", component: <About /> },
  { name: "PRODUCT", path: "/product", component: <Product /> },
  { name: "CONTACT", path: "/contact", component: <Contact /> },
];

export { publicRoutes };