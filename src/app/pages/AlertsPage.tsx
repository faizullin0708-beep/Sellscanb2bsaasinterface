import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { AlertCircle, TrendingDown, Package, AlertTriangle, ArrowDown, CheckCircle, ExternalLink } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "motion/react";

const alertsData = [
  {
    id: 1,
    type: "negative_margin",
    severity: "high",
    sku: "WB-98765",
    product: "Джинсы классические",
    marketplace: "WB",
    message: "Негативная маржа -15.3%",
    details: "Комиссии и логистика превышают прибыль. Рекомендуется пересмотреть цену или себестоимость.",
    impact: "Убыток ₽2,300 в день",
    timestamp: "2 часа назад",
    status: "active",
  },
  {
    id: 2,
    type: "low_stock",
    severity: "critical",
    sku: "WB-44444",
    product: "Толстовка с капюшоном",
    marketplace: "WB",
    message: "Критический остаток: 3 дня до out-of-stock",
    details: "Текущий запас: 12 единиц. Средние продажи: 4 ед/день.",
    impact: "Риск потери позиций в поиске",
    timestamp: "4 часа назад",
    status: "active",
  },
  {
    id: 3,
    type: "returns_spike",
    severity: "medium",
    sku: "OZ-77777",
    product: "Платье летнее",
    marketplace: "Ozon",
    message: "Рост возвратов на 18%",
    details: "За последние 7 дней процент возвратов вырос с 5% до 23%.",
    impact: "Потенциальные проблемы с качеством или описанием",
    timestamp: "5 часов назад",
    status: "active",
  },
  {
    id: 4,
    type: "negative_margin",
    severity: "high",
    sku: "OZ-54321",
    product: "Футболка базовая",
    marketplace: "Ozon",
    message: "Негативная маржа -22.5%",
    details: "Высокие логистические расходы относительно цены товара.",
    impact: "Убыток ₽1,800 в день",
    timestamp: "6 часов назад",
    status: "active",
  },
  {
    id: 5,
    type: "low_stock",
    severity: "medium",
    sku: "OZ-55555",
    product: "Перчатки кожаные",
    marketplace: "Ozon",
    message: "Низкий остаток: 5 дней до out-of-stock",
    details: "Текущий запас: 24 единицы. Средние продажи: 5 ед/день.",
    impact: "Рекомендуется пополнение запасов",
    timestamp: "8 часов назад",
    status: "active",
  },
  {
    id: 6,
    type: "sales_drop",
    severity: "medium",
    sku: "YM-99999",
    product: "Кофта шерстяная",
    marketplace: "YM",
    message: "Падение продаж на 45%",
    details: "Продажи упали с 15 ед/день до 8 ед/день за последнюю неделю.",
    impact: "Возможна потеря позиций в категории",
    timestamp: "12 часов назад",
    status: "reviewing",
  },
  {
    id: 7,
    type: "low_stock",
    severity: "medium",
    sku: "YM-66666",
    product: "Шарф кашемировый",
    marketplace: "YM",
    message: "Низкий остаток: 7 дней до out-of-stock",
    details: "Текущий запас: 35 единиц. Средние продажи: 5 ед/день.",
    impact: "Рекомендуется пополнение запасов",
    timestamp: "1 день назад",
    status: "reviewing",
  },
  {
    id: 8,
    type: "negative_margin",
    severity: "high",
    sku: "WB-11111",
    product: "Шапка вязаная",
    marketplace: "WB",
    message: "Негативная маржа -8.2%",
    details: "Сезонное снижение цен привело к убыточности.",
    impact: "Убыток ₽900 в день",
    timestamp: "1 день назад",
    status: "resolved",
  },
];

const severityConfig = {
  critical: { color: "bg-destructive text-destructive-foreground", icon: AlertCircle },
  high: { color: "bg-destructive text-destructive-foreground", icon: AlertTriangle },
  medium: { color: "bg-warning text-warning-foreground", icon: AlertTriangle },
  low: { color: "bg-muted text-muted-foreground", icon: AlertCircle },
};

const typeConfig = {
  negative_margin: { icon: TrendingDown, label: "Negative Margin" },
  low_stock: { icon: Package, label: "Low Stock" },
  returns_spike: { icon: ArrowDown, label: "Returns Spike" },
  sales_drop: { icon: TrendingDown, label: "Sales Drop" },
};

export default function AlertsPage() {
  const activeAlerts = alertsData.filter((a) => a.status === "active");
  const reviewingAlerts = alertsData.filter((a) => a.status === "reviewing");
  const resolvedAlerts = alertsData.filter((a) => a.status === "resolved");

  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Алерты</h1>
        <p className="text-muted-foreground">Уведомления и проблемы, требующие внимания</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Активные алерты</CardDescription>
            <CardTitle className="text-3xl text-destructive">{activeAlerts.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Требуют немедленных действий</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>На рассмотрении</CardDescription>
            <CardTitle className="text-3xl text-warning">{reviewingAlerts.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Расследуются</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Решено сегодня</CardDescription>
            <CardTitle className="text-3xl text-success">{resolvedAlerts.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Проблемы решены</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-4">Активные алерты</h2>
          <div className="space-y-3">
            {activeAlerts.map((alert) => {
              const SeverityIcon = severityConfig[alert.severity].icon;
              const TypeIcon = typeConfig[alert.type].icon;
              return (
                <Card key={alert.id} className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1">
                          <SeverityIcon className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <CardTitle className="text-base">{alert.message}</CardTitle>
                            <Badge className={severityConfig[alert.severity].color}>
                              {alert.severity}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-mono">{alert.sku}</span>
                            <span>•</span>
                            <span>{alert.product}</span>
                            <span>•</span>
                            <Badge variant="secondary" className="text-xs">{alert.marketplace}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {alert.timestamp}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <TypeIcon className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div className="space-y-1">
                          <p className="text-sm text-foreground">{alert.details}</p>
                          <p className="text-sm text-destructive">{alert.impact}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm">View Details</Button>
                      <Button size="sm" variant="outline">Mark as Reviewing</Button>
                      <Button size="sm" variant="ghost">Dismiss</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">На рассмотрении</h2>
          <div className="space-y-3">
            {reviewingAlerts.map((alert) => {
              const SeverityIcon = severityConfig[alert.severity].icon;
              return (
                <Card key={alert.id} className="border-l-4 border-l-warning">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1">
                          <SeverityIcon className="w-5 h-5 text-warning" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <CardTitle className="text-base">{alert.message}</CardTitle>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="font-mono">{alert.sku}</span>
                            <span>•</span>
                            <span>{alert.product}</span>
                            <span>•</span>
                            <Badge variant="secondary" className="text-xs">{alert.marketplace}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        {alert.timestamp}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{alert.details}</p>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" className="gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Отметить решенным
                      </Button>
                      <Button size="sm" variant="ghost">Активировать</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">Решено</h2>
          <div className="space-y-3">
            {resolvedAlerts.map((alert) => (
              <Card key={alert.id} className="opacity-60 border-l-4 border-l-success">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">
                        <CheckCircle className="w-5 h-5 text-success" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <CardTitle className="text-base">{alert.message}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-mono">{alert.sku}</span>
                          <span>•</span>
                          <span>{alert.product}</span>
                          <span>•</span>
                          <Badge variant="secondary" className="text-xs">{alert.marketplace}</Badge>
                          <span>•</span>
                          <span className="text-success">Решено</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground whitespace-nowrap">
                      {alert.timestamp}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
