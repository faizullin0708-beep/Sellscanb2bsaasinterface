import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BarChart3, TrendingUp, AlertTriangle, Package, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl text-primary">SellScan</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/signin">
              <Button variant="ghost">Войти</Button>
            </Link>
            <Link to="/signup">
              <Button>Начать</Button>
            </Link>
          </div>
        </div>
      </header>

      <motion.section
        className="max-w-7xl mx-auto px-6 py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge className="mb-6" variant="secondary">
            B2B Analytics Platform
          </Badge>
        </motion.div>
        <motion.h1
          className="text-5xl mb-6 text-foreground max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Реальная прибыль по каждому SKU на маркетплейсах
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          SellScan показывает, где вы теряете маржу на Wildberries, Ozon и Яндекс Маркете.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/signup">
            <Button size="lg" className="gap-2 transition-all hover:scale-105">
              Попробовать <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="transition-all hover:scale-105">
            Смотреть демо
          </Button>
        </motion.div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Проблемы продавцов на маркетплейсах</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Скрытые комиссии, непредсказуемая логистика и невидимые убытки по товарам
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <AlertTriangle className="w-10 h-10 text-warning mb-4" />
              <CardTitle>Негативная маржа</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                До 30% SKU могут продаваться в убыток из-за скрытых комиссий и высоких расходов на логистику
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package className="w-10 h-10 text-destructive mb-4" />
              <CardTitle>Out-of-stock риски</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Потеря позиций в поиске и упущенная выручка из-за отсутствия контроля остатков
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Нет реальной аналитики</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Кабинеты маркетплейсов не показывают реальную прибыль с учетом всех затрат
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Ключевые возможности</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="mb-2">Прибыль по каждому SKU</h3>
              <p className="text-muted-foreground">
                Видите реальную прибыль с учетом всех комиссий, логистики и себестоимости
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-success" />
              </div>
            </div>
            <div>
              <h3 className="mb-2">Умные алерты</h3>
              <p className="text-muted-foreground">
                Автоматические уведомления о проблемных товарах и критических остатках
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div>
              <h3 className="mb-2">Контроль остатков</h3>
              <p className="text-muted-foreground">
                Прогноз дней до out-of-stock и рекомендации по пополнению
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="mb-2">Интеграции</h3>
              <p className="text-muted-foreground">
                Автоматическая синхронизация с Wildberries, Ozon и Яндекс Маркет
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Интеграции</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">WB</span>
              </div>
              <CardTitle>Wildberries</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Автоматическая синхронизация данных</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">OZ</span>
              </div>
              <CardTitle>Ozon</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Полная интеграция с API</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">YM</span>
              </div>
              <CardTitle>Яндекс Маркет</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Данные в реальном времени</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Pricing</h2>
          <p className="text-muted-foreground">Выберите план для вашего бизнеса</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="relative">
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
              <div className="space-y-2">
                <Button variant="outline" className="w-full gap-2">
                  Начать <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">Без привязки карты • Можно отменить в любой момент</p>
              </div>
            </CardContent>
          </Card>

          <Card className="relative border-primary shadow-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-white text-primary shadow-md">⭐ Рекомендуем</Badge>
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
              <div className="space-y-2">
                <Button className="w-full gap-2 bg-white text-primary hover:bg-white/90">
                  Выбрать Growth <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-primary-foreground/70 text-center">Без привязки карты • Можно отменить в любой момент</p>
              </div>
            </CardContent>
          </Card>

          <Card className="relative">
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
              <div className="space-y-2">
                <Button variant="outline" className="w-full gap-2">
                  Начать <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">Без привязки карты • Можно отменить в любой момент</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center border-t border-border">
        <h2 className="text-4xl mb-6">Начните контролировать прибыль сегодня</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к сотням продавцов, которые уже оптимизировали свою прибыль
        </p>
        <Link to="/signup">
          <Button size="lg" className="gap-2">
            Попробовать бесплатно <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </section>

      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-muted-foreground text-sm">
          <p>© 2026 SellScan. Контроль прибыли на маркетплейсах.</p>
        </div>
      </footer>
    </div>
  );
}
