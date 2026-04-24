import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { BarChart3, Link2 } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { EmptyState } from "../components/EmptyState";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const navigate = useNavigate();
  const hasMarketplaceConnections = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl mb-2">Дашборд</h1>
          <p className="text-muted-foreground">Обзор вашего бизнеса на маркетплейсах</p>
        </div>

        {!hasMarketplaceConnections ? (
          <AnimatedCard delay={0.1}>
            <Card>
              <CardContent className="py-16">
                <EmptyState
                  icon={BarChart3}
                  title="Данных пока нет"
                  description="Подключите маркетплейс и запустите синхронизацию, чтобы увидеть выручку, прибыль и маржинальность по SKU."
                  action={{
                    label: "Подключить маркетплейс",
                    onClick: () => navigate("/app/connections"),
                  }}
                />
              </CardContent>
            </Card>
          </AnimatedCard>
        ) : (
          <div className="space-y-8">
            <div className="text-sm text-muted-foreground">
              Статистика появится после подключения маркетплейсов.
            </div>
          </div>
        )}

        <AnimatedCard delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Быстрый старт</CardTitle>
              <CardDescription>Следующие шаги для начала работы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Подключить маркетплейс</h4>
                    <p className="text-sm text-muted-foreground">
                      Добавьте API-ключ Wildberries, Ozon или Яндекс Маркета для синхронизации данных.
                    </p>
                  </div>
                  <Button size="sm" className="w-full" onClick={() => navigate("/app/connections")}>
                    Подключить
                  </Button>
                </div>

                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Импортировать себестоимость</h4>
                    <p className="text-sm text-muted-foreground">
                      Загрузите CSV-файл с закупочными ценами для расчета прибыли.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" onClick={() => navigate("/app/costs")}>
                    Импортировать
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
}
