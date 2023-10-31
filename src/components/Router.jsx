import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import StorePage from "./storePage/StorePage";
import Cart from "./cart/Cart";
import ErrorPage from "./errorPage/ErrorPage";
import ItemPage from "./itemPage/ItemPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/shop", element: <StorePage /> },
        { path: "/cart", element: <Cart /> },
        { path: "/shop/:itemID", element: <ItemPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
