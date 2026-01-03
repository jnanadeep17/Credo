import Navbar from "./components/Navbar"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import HeroSection from "./components/HeroSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><HeroSection /></>
    },
    {
      path: "/dashboard",
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
  ])
  return (

    <>
      <div className="min-h-screen w-full bg-[#fff8f0] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Your Content/Components */}

        <div className="relative z-10">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  )
}

export default App
