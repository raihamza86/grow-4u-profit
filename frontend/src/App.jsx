import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Developer from "./pages/Developer";
import Plans from "./pages/Plans";
import Services from "./pages/Services";
import Contact from "./pages/Plans";
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css'
import Task from "./components/dashboard/Task";
import Dashboard from "./components/dashboard/Dashboard";
import ReferralLinks from "./pages/ReferralLinks";


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/developer", element: <Developer /> },
      { path: "/plans", element: <Plans /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/task", element: <Task /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/referrallink", element: <ReferralLinks /> },
      { path: "*", element: <div>Page not found.</div> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
