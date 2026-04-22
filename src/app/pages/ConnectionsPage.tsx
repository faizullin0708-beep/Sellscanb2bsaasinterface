import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CheckCircle, XCircle, RefreshCw, Settings, Link as LinkIcon } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";

const connectionsData = [
  {
    id: "wb",
    name: "Wildberries",
    logo: "WB",
    connected: true,
    account: "seller@company.ru",
    lastSync: "5 минут назад",
    status: "active",
    stats: {
      skus: 124,
      revenue24h: "₽450,000",
      orders24h: 89,
    },
  },
  {
    id: "ozon",
    name: "Ozon",
    logo: "OZ",
    connected: true,
    account: "company_seller",
    lastSync: "12 минут назад",
    status: "active",
    stats: {
      skus: 98,
      revenue24h: "₽320,000",
      orders24h: 56,
    },
  },
  {
    id: "ym",
    name: "Яндекс Маркет",
    logo: "YM",
    connected: true,
    account: "company-market-id",
    lastSync: "8 минут назад",
    status: "warning",
    stats: {
      skus: 67,
      revenue24h: "₽180,000",
      orders24h: 34,
    },
    warning: "API key expires in 7 days",
  },
];

export default function ConnectionsPage() {
  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Подключения</h1>
        <p className="text-muted-foreground">Управление интеграциями с маркетплейсами</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {connectionsData.map((connection) => (
          <Card key={connection.id} className={connection.status === "warning" ? "border-warning" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl text-primary">{connection.logo}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle>{connection.name}</CardTitle>
                      {connection.connected ? (
                        <Badge variant="default" className="bg-success text-success-foreground gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Подключено
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="gap-1">
                          <XCircle className="w-3 h-3" />
                          Не подключено
                        </Badge>
                      )}
                      {connection.status === "warning" && (
                        <Badge className="bg-warning text-warning-foreground">
                          Требуется внимание
                        </Badge>
                      )}
                    </div>
                    <CardDescription>
                      Аккаунт: <span className="font-mono">{connection.account}</span>
                    </CardDescription>
                    <div className="text-sm text-muted-foreground">
                      Последняя синхронизация: {connection.lastSync}
                    </div>
                    {connection.warning && (
                      <div className="text-sm text-warning flex items-center gap-1">
                        <LinkIcon className="w-4 h-4" />
                        {connection.warning}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Синхронизировать
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Settings className="w-4 h-4" />
                    Настройки
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Активных SKU</div>
                  <div className="text-2xl">{connection.stats.skus}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Выручка (24ч)</div>
                  <div className="text-2xl">{connection.stats.revenue24h}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Заказов (24ч)</div>
                  <div className="text-2xl">{connection.stats.orders24h}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <Button variant="outline" size="sm">Логи API</Button>
                <Button variant="outline" size="sm">Тест подключения</Button>
                {connection.status === "warning" && (
                  <Button size="sm" className="gap-2">
                    <LinkIcon className="w-4 h-4" />
                    Обновить API ключ
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
              <LinkIcon className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <CardTitle>Добавить подключение</CardTitle>
              <CardDescription>Подключите маркетплейс для синхронизации данных</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button className="gap-2">
            <LinkIcon className="w-4 h-4" />
            Добавить маркетплейс
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Инструкция по подключению</CardTitle>
          <CardDescription>Как подключить маркетплейс</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
              Получите API ключи
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Войдите в личный кабинет продавца и перейдите в раздел API для генерации ключей.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</div>
              Добавьте подключение в SellScan
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Нажмите "Добавить маркетплейс" и введите API ключ и ID продавца. Подключение будет проверено автоматически.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</div>
              Начните синхронизацию
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              После подключения SellScan автоматически синхронизирует данные о товарах, заказах и финансах каждые 15 минут.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </AnimatedPage>
  );
}
