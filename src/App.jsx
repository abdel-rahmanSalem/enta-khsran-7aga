import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
