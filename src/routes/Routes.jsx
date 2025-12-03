import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Root from "../components/root.jsx/Root";
import AddedBlog from "../components/blogs/AddedBlog";
import FeaturedBlogs from "../components/blogs/FeaturedBlogs";
import AllBlog from "../components/blogs/AllBlog";
import WishList from "../components/wishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addblog",
        element: <AddedBlog />,
      },
      {
        path: "/featuredblog",
        element: <FeaturedBlogs />,
      },
      {
        path: "/allblog",
        element: <AllBlog />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);
