import './App.css';
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
import Task from "./components/dashboard/Task";
import Dashboard from "./components/dashboard/Dashboard";
import ReferralLinks from "./pages/ReferralLinks";
import DepositHestory from "./pages/DepositHestory";
import ProfileSetting from "./pages/ProfileSetting";
import WithdrawHistory from "./components/WithdrawHistory";
import { FaWhatsapp } from "react-icons/fa";
import TaskHistory from './components/TaskHistory';
import ReferralBounse from './components/ReferralBounse';
import ChangePassword from './components/ChangePassword';
import FirstDeposit from './components/plans/FirstDeposit';
import SecondDepPg from './components/plans/SecondDepPg';
import DashboardLayout from './components/DashboardLayout';
import WithdrawMoney from './components/WithdrawMoney';
import WithdrawEasyPaisa from './components/WithdrawEasyPaisa';
import WithdrawPreview from './components/WithdrawPreview';

import AdminLayout from './AdminDashboard/AdminLayout';
import AdminDashboard from './AdminDashboard/pages/Dashboard';
import Ads from './AdminDashboard/components/Ads';
import Users from './AdminDashboard/components/Users';
import Packages from './AdminDashboard/components/Packages';
import Payments from './AdminDashboard/components/Payments';
import Referrals from './AdminDashboard/components/Referrals';
import Reports from './AdminDashboard/components/Reports';
import Settings from './AdminDashboard/components/Settings';
import TaskProgress from './components/TaskProgress';
import TaskTwo from './components/TaskTwo';
import PageNotFound from './components/PageNotFound';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      {/* Fixed WhatsApp Icon */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition animate-bounce-custom"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

    </>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/developer", element: <Developer /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/plans", element: <Plans /> },
      { path: "/firstDeposit", element: <FirstDeposit /> },
      { path: "/SecondDepPg", element: <SecondDepPg /> },
    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/task", element: <Task /> },
      { path: "/referrallink", element: <ReferralLinks /> },
      { path: "/deposithestory", element: <DepositHestory /> },
      { path: "/withdrawhistory", element: <WithdrawHistory /> },
      { path: "/withdrawmoney", element: <WithdrawMoney /> },
      { path: "/withdraweasypaisa", element: <WithdrawEasyPaisa /> },
      { path: "/withdrawpreview", element: <WithdrawPreview /> },
      { path: "/profilesetting", element: <ProfileSetting /> },
      { path: "/taskhistory", element: <TaskHistory /> },
      { path: "/taskprogress", element: <TaskProgress /> },
      { path: "/tasktwo", element: <TaskTwo /> },
      { path: "/referralbounse", element: <ReferralBounse /> },
      { path: "/changepassword", element: <ChangePassword /> },
    ]
  },
  // Admin Routes
  {
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/ads", element: <Ads /> },
      { path: "/admin/users", element: <Users /> },
      { path: "/admin/packages", element: <Packages /> },
      { path: "/admin/payments", element: <Payments /> },
      { path: "/admin/referrals", element: <Referrals /> },
      { path: "/admin/reports", element: <Reports /> },
      { path: "/admin/settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <div className="text-center py-20 text-2xl font-bold">Page not found.</div> },
  { path: "*", element: <PageNotFound/> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
