import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link2 } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { EmptyState } from "../components/EmptyState";

export default function ConnectionsPage() {
  const hasConnections = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Подключения</h1>
          <p className="text-muted-foreground">Управление интеграциями с маркетплейсами</p>
        </div>

        <AnimatedCard delay={0.1}>
          <Card>
            <CardContent className="py-16">
              <EmptyState
                icon={Link2}
                title="Маркетплейсы не подключены"
                description="Подключите Wildberries, Ozon или Яндекс Маркет через API-ключ для синхронизации товаров, продаж и финансов."
                action={{
                  label: "Добавить маркетплейс",
                  onClick: () => {},
                }}
              />
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Как подключить маркетплейс</CardTitle>
              <CardDescription>Инструкция по интеграции</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
                  Получите API ключи
                </h4>
                <p className="text-sm text-muted-foreground ml-8">
                  Войдите в личный кабинет продавца и перейдите в раздел API для генерации ключей доступа.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</div>
                  Добавьте подключение
                </h4>
                <p className="text-sm text-muted-foreground ml-8">
                  Нажмите "Добавить маркетплейс" и введите API ключ. Подключение будет проверено автоматически.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</div>
                  Запустите синхронизацию
                </h4>
                <p className="text-sm text-muted-foreground ml-8">
                  После подключения SellScan автоматически синхронизирует данные о товарах, заказах и финансах каждые 15 минут.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
}
