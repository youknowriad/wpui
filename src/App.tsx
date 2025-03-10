import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

// Import layouts
import RootLayout from './layouts/RootLayout'

// Import pages
import ExamplesPage from './pages/ExamplesPage'
import ExampleWrapper from './components/ExampleWrapper'

// Import examples
import { examples } from './examples/index'

// Create the routes
const routes = examples.map(example => ({
  path: `examples/${example.slug}`,
  element: <ExampleWrapper 
    title={example.name}
    component={example.component} 
  />
}))

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ExamplesPage />,
      },
      ...routes
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
