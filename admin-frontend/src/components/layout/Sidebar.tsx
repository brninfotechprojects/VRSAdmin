import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Car,
  MapPin,
  DollarSign,
  Building2,
  BarChart3,
  MessageSquare,
  Ticket,
  Wallet,
  Bell,
  Shuffle as Shuttle,
  X,
} from "lucide-react";
import logo from "../../assets/VRSLogo.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Drivers", href: "/dashboard/drivers", icon: Car },
  { name: "Rides", href: "/dashboard/rides", icon: MapPin },
  { name: "Pricing", href: "/dashboard/pricing", icon: DollarSign },
  { name: "Cities", href: "/dashboard/cities", icon: Building2 },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
  { name: "Promo Codes", href: "/dashboard/promo-codes", icon: Ticket },
  { name: "Wallet", href: "/dashboard/wallet", icon: Wallet },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 flex z-40 md:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <SidebarContent location={location} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <SidebarContent location={location} />
        </div>
      </div>
    </>
  );
}

function SidebarContent({ location }: { location: any }) {
  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          {/* <div className="bg-indigo-600 p-2 rounded-lg">
            <Shuttle className="h-8 w-8 text-white" />
          </div>
          <span className="ml-3 text-xl font-bold text-gray-900">VR Shuttle</span> */}
          <img
            style={{ objectFit: "contain", height: "90px" }}
            src={logo}
          ></img>
        </div>
        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 transition-colors ${
                    isActive
                      ? "text-indigo-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
