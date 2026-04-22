import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown, AlertCircle, Package, RefreshCw } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "../components/ui/button";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";

const profitTrendData = [
  { date: "16.04", revenue: 450000, profit: 135000 },
  { date: "17.04", revenue: 520000, profit: 156000 },
  { date: "18.04", revenue: 480000, profit: 144000 },
  { date: "19.04", revenue: 610000, profit: 183000 },
  { date: "20.04", revenue: 580000, profit: 174000 },
  { date: "21.04", revenue: 650000, profit: 195000 },
];

const marketplaceData = [
  { name: "Wildberries", value: 55, color: "#4f46e5" },
  { name: "Ozon", value: 30, color: "#10b981" },
  { name: "Яндекс Маркет", value: 15, color: "#f59e0b" },
];

const topProfitable = [
  { sku: "WB-12345", name: "Куртка зимняя Premium", marketplace: "WB", profit: 12500, margin: 45 },
  { sku: "OZ-67890", name: "Кроссовки спортивные", marketplace: "Ozon", profit: 8900, margin: 38 },
  { sku: "YM-34567", name: "Рюкзак городской", marketplace: "YM", profit: 7200, margin: 42 },
];

const topLossMaking = [
  { sku: "WB-98765", name: "Джинсы классические", marketplace: "WB", profit: -2300, margin: -12 },
  { sku: "OZ-54321", name: "Футболка базовая", marketplace: "Ozon", profit: -1800, margin: -8 },
  { sku: "WB-11111", name: "Шапка вязаная", marketplace: "WB", profit: -900, margin: -5 },
];

const stockRisk = [
  { sku: "WB-44444", name: "Толстовка с капюшоном", stock: 12, daysLeft: 3, status: "critical" },
  { sku: "OZ-55555", name: "Перчатки кожаные", stock: 24, daysLeft: 5, status: "warning" },
  { sku: "YM-66666", name: "Шарф кашемировый", stock: 35, daysLeft: 7, status: "warning" },
];

const alerts = [
  { type: "negative_margin", sku: "WB-98765", message: "Негативная маржа -12%", time: "2 часа назад" },
  { type: "low_stock", sku: "WB-44444", message: "Критический остаток: 3 дня", time: "4 часа назад" },
  { type: "returns_spike", sku: "OZ-77777", message: "Рост возвратов на 15%", time: "5 часов назад" },
];

export default function DashboardPage() {
  return (
    <AnimatedPage>
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Дашборд</h1>
          <p className="text-muted-foreground">Обзор вашего бизнеса на маркетплейсах</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Синхронизировано 5 мин назад
          </Badge>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Синхронизировать
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedCard delay={0.1}>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Выручка вчера</CardDescription>
            <CardTitle className="text-3xl">₽650,000</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-success">
              <ArrowUp className="w-4 h-4" />
              <span>+12.5% к пред. дню</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Прибыль вчера</CardDescription>
            <CardTitle className="text-3xl">₽195,000</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-success">
              <ArrowUp className="w-4 h-4" />
              <span>+8.3% к пред. дню</span>
            </div>
          </CardContent>
        </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Средняя маржа</CardDescription>
            <CardTitle className="text-3xl">30%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Цель: 35%</span>
            </div>
          </CardContent>
        </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.25}>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>SKU в убытке</CardDescription>
            <CardTitle className="text-3xl text-destructive">23</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="w-4 h-4" />
              <span>Требует внимания</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Низкий остаток</CardDescription>
            <CardTitle className="text-3xl text-warning">8</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-warning">
              <Package className="w-4 h-4" />
              <span>&lt;7 дней</span>
            </div>
          </CardContent>
        </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.35}>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Процент возвратов</CardDescription>
            <CardTitle className="text-3xl">4.2%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-success">
              <ArrowDown className="w-4 h-4" />
              <span>-0.5% к пред. неделе</span>
            </div>
          </CardContent>
        </Card>
        </AnimatedCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Динамика прибыли</CardTitle>
            <CardDescription>Выручка и прибыль (последние 7 дней)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={profitTrendData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" fillOpacity={1} fill="url(#colorRevenue)" name="Выручка" />
                <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" name="Прибыль" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Распределение по маркетплейсам</CardTitle>
            <CardDescription>Выручка по платформам</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={marketplaceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {marketplaceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Самые прибыльные SKU
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Прибыль</TableHead>
                  <TableHead className="text-right">Маржа</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProfitable.map((item) => (
                  <TableRow key={item.sku}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{item.sku}</div>
                        <Badge variant="secondary" className="text-xs">{item.marketplace}</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{item.name}</TableCell>
                    <TableCell className="text-right text-success">₽{item.profit.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-success">{item.margin}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-destructive" />
              Самые убыточные SKU
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Прибыль</TableHead>
                  <TableHead className="text-right">Маржа</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topLossMaking.map((item) => (
                  <TableRow key={item.sku}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{item.sku}</div>
                        <Badge variant="secondary" className="text-xs">{item.marketplace}</Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{item.name}</TableCell>
                    <TableCell className="text-right text-destructive">₽{item.profit.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-destructive">{item.margin}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-warning" />
              Риск остатков
            </CardTitle>
            <CardDescription>Товары с низким остатком</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Остаток</TableHead>
                  <TableHead className="text-right">Дней осталось</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockRisk.map((item) => (
                  <TableRow key={item.sku}>
                    <TableCell className="text-sm">{item.sku}</TableCell>
                    <TableCell className="text-sm">{item.name}</TableCell>
                    <TableCell className="text-right">{item.stock}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={item.status === "critical" ? "destructive" : "default"} className={item.status === "warning" ? "bg-warning text-warning-foreground" : ""}>
                        {item.daysLeft} дней
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-destructive" />
              Последние алерты
            </CardTitle>
            <CardDescription>Проблемы, требующие внимания</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    alert.type === "negative_margin" ? "bg-destructive" :
                    alert.type === "low_stock" ? "bg-warning" :
                    "bg-primary"
                  }`} />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm">{alert.message}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{alert.sku}</span>
                      <span>•</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </AnimatedPage>
  );
}
