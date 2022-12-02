import Product from "../pages/Product";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Signup from "../pages/Signup";

const publicRoutes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/product", component: <Product /> },
  { path: "/contact", component: <Contact /> },
  { path: "/signup", component: <Signup /> },
];

export { publicRoutes };
