import { createBrowserRouter } from "react-router";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <Shop /> },
  { path: "/cart", element: <Cart /> },
  {path: "*", element: <NotFound />},
]);

export default router;
