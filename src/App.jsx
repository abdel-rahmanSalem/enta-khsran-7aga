import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);
function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
