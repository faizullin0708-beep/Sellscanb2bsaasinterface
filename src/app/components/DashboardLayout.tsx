import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Package,
  AlertCircle,
  Link as LinkIcon,
  DollarSign,
  CreditCard,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { cn } from "./ui/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { motion, AnimatePresence } from "motion/react";

const navigation = [
  { name: "Дашборд", href: "/app", icon: LayoutDashboard },
  { name: "Товары", href: "/app/products", icon: Package },
  { name: "Алерты", href: "/app/alerts", icon: AlertCircle },
  { name: "Подключения", href: "/app/connections", icon: LinkIcon },
  { name: "Себестоимость", href: "/app/costs", icon: DollarSign },
  { name: "Биллинг", href: "/app/billing", icon: CreditCard },
  { name: "Настройки", href: "/app/settings", icon: Settings },
];

const userNavigation = [
  { name: "Личный кабинет", href: "/app/profile", icon: User },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl text-primary">SellScan</h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== "/app" && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-1">
          {userNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent"
                )}
              >
                <Avatar className="w-5 h-5">
                  <AvatarFallback className="text-xs">ИП</AvatarFallback>
                </Avatar>
                <span>{item.name}</span>
              </Link>
            );
          })}
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-foreground hover:bg-accent transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </div>
  );
}
