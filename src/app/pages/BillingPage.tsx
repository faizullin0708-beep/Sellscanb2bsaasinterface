import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Package, BarChart3, TrendingUp } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";

export default function BillingPage() {
  const currentPlan = null;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Биллинг</h1>
          <p className="text-muted-foreground">Управление подпиской и платежной информацией</p>
        </div>

        {!currentPlan ? (
          <>
            <AnimatedCard delay={0.1}>
              <Card className="border-primary/50 bg-gradient-to-br from-background to-primary/5">
                <CardHeader>
                  <CardTitle>Выберите тарифный план</CardTitle>
                  <CardDescription>
                    Начните с бесплатного периода или выберите подходящий тариф для вашего бизнеса
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedCard delay={0.15}>
                <Card>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Package className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-1">Starter</CardTitle>
                        <p className="text-sm text-muted-foreground">Базовые метрики продавца</p>
                      </div>
                    </div>
                    <div className="text-4xl">₽2,990<span className="text-lg text-muted-foreground">/МО</span></div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>До 100 SKU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>1 маркетплейс</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Базовая аналитика</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <Card className="border-primary shadow-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary px-3 py-1 rounded-full text-sm shadow-md">
                    ⭐ Рекомендуем
                  </div>
                  <CardHeader className="space-y-4 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="mb-1 text-white">Growth</CardTitle>
                        <p className="text-sm text-primary-foreground/80">Для растущего бизнеса</p>
                      </div>
                    </div>
                    <div className="text-4xl text-white">₽7,990<span className="text-lg text-primary-foreground/80">/МО</span></div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3 text-sm text-primary-foreground/90">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span>До 500 SKU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span>Все маркетплейсы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span>Умные алерты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                        <span>Telegram интеграция</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-white text-primary hover:bg-white/90">
                      Выбрать Growth
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.25}>
                <Card>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-1">Pro</CardTitle>
                        <p className="text-sm text-muted-foreground">Максимальные возможности</p>
                      </div>
                    </div>
                    <div className="text-4xl">₽17,990<span className="text-lg text-muted-foreground">/МО</span></div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Unlimited SKU</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Все маркетплейсы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>API доступ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>Приоритетная поддержка</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">
                      Выбрать план
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </div>
          </>
        ) : null}
      </div>
    </AnimatedPage>
  );
}
