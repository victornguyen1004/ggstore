import Product from "../pages/Product";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/product", component: <Product /> },
  { path: "/contact", component: <Contact /> },
];

export { publicRoutes };
