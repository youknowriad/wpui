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

// Import theme provider
import { ThemeProvider } from "./context/ThemeContext";

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
  return (
    <ThemeProvider>
      <RouterProvider
        future={{
          v7_startTransition: true,
          // @ts-expect-error - This is a future flag
          v7_relativeSplatPath: true,
        }}
        router={router}
      />
    </ThemeProvider>
  );
}

export default App;
