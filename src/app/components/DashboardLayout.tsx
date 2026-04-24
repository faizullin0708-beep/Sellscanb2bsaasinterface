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
import { AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "Личный кабинет", href: "/app/profile", icon: User },
  { name: "Дашборд", href: "/app", icon: LayoutDashboard },
  { name: "Товары", href: "/app/products", icon: Package },
  { name: "Алерты", href: "/app/alerts", icon: AlertCircle },
  { name: "Подключения", href: "/app/connections", icon: LinkIcon },
  { name: "Себестоимость", href: "/app/costs", icon: DollarSign },
  { name: "Биллинг", href: "/app/billing", icon: CreditCard },
  { name: "Настройки", href: "/app/settings", icon: Settings },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-card flex flex-col min-h-screen sticky top-0">
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

        <div className="p-4 border-t border-border space-y-2">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-muted-foreground">Тема</span>
            <ThemeToggle />
          </div>
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-foreground hover:bg-accent transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Выйти</span>
          </button>
        </div>
      </aside>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </div>
  );
}
