import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";

// Import layouts
import RootLayout from "./layouts/RootLayout";

// Import pages
import CategoryPage from "./pages/CategoryPage";
import ExamplePage from "./pages/ExamplePage";

// Import examples
import { getExamplesByCategory } from "./examples/index";

// Get the first category for redirection
const categories = getExamplesByCategory();
const firstCategory =
  categories.length > 0
    ? categories[0].category.toLowerCase().replace(/\s+/g, "-")
    : "";

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/category/${firstCategory}`} replace />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "examples/:slug",
        element: <ExamplePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
