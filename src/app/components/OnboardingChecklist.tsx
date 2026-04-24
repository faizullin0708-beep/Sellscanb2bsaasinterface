import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, Circle, Lock } from "lucide-react";
import { useNavigate } from "react-router";

interface ChecklistStep {
  id: string;
  title: string;
  description: string;
  status: "completed" | "pending" | "locked";
  action: string;
  href?: string;
}

export function OnboardingChecklist() {
  const navigate = useNavigate();

  const steps: ChecklistStep[] = [
    {
      id: "profile",
      title: "Заполнить профиль",
      description: "Добавьте имя, телефон и город.",
      status: "pending",
      action: "Заполнить профиль",
      href: "/app/profile",
    },
    {
      id: "company",
      title: "Добавить реквизиты компании",
      description: "Укажите ИНН, ОГРН и юридический адрес для документов и биллинга.",
      status: "pending",
      action: "Добавить реквизиты",
      href: "/app/profile",
    },
    {
      id: "marketplace",
      title: "Подключить маркетплейс",
      description: "Подключите Wildberries, Ozon или Яндекс Маркет через API-ключ.",
      status: "pending",
      action: "Подключить",
      href: "/app/connections",
    },
    {
      id: "costs",
      title: "Импортировать себестоимость",
      description: "Загрузите CSV с закупочными ценами товаров.",
      status: "pending",
      action: "Импортировать CSV",
      href: "/app/costs",
    },
    {
      id: "sync",
      title: "Запустить синхронизацию",
      description: "Загрузите товары, продажи, возвраты, комиссии и остатки.",
      status: "locked",
      action: "Будет доступно после подключения",
    },
    {
      id: "profitability",
      title: "Посмотреть прибыльность",
      description: "После синхронизации SellScan покажет прибыль и маржу по SKU.",
      status: "locked",
      action: "Откроется после загрузки данных",
    },
  ];

  const completedSteps = steps.filter(s => s.status === "completed").length;
  const totalSteps = steps.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Начните работу с SellScan</CardTitle>
        <CardDescription>
          Заполните профиль, подключите маркетплейс и загрузите себестоимость, чтобы увидеть прибыльность по SKU.
        </CardDescription>
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Прогресс</span>
            <span>{completedSteps} из {totalSteps} шагов выполнено</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 mt-1">
                {step.status === "completed" && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
                {step.status === "pending" && (
                  <Circle className="w-5 h-5 text-muted-foreground" />
                )}
                {step.status === "locked" && (
                  <Lock className="w-5 h-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              <div className="flex-shrink-0">
                {step.status === "locked" ? (
                  <Button variant="ghost" size="sm" disabled>
                    {step.action}
                  </Button>
                ) : step.status === "completed" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => step.href && navigate(step.href)}
                  >
                    Просмотр
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => step.href && navigate(step.href)}
                  >
                    {step.action}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
