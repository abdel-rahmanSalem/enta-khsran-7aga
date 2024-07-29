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
  return (
    <div className="h-screen">
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </div>
  );
}

export default App;
