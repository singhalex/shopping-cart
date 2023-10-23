import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./home/Home";
import StorePage from "./storePage/StorePage";
import Cart from "./cart/Cart";
import ErrorPage from "./errorPage/ErrorPage";

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
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
