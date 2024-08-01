import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import List from "./pages/List";
import PageLayout from "./layout/PageLayout";
import { TgarbProvider } from "./contexts/TgarbProvider";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
]);
function App() {
  return (
    <TgarbProvider>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </TgarbProvider>
  );
}

export default App;
