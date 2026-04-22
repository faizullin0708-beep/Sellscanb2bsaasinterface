import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Mail, Phone, MapPin, Building2, Calendar, Activity, TrendingUp, Package, AlertCircle, Edit } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";

const activityData = [
  { date: "22.04.2026, 14:30", action: "Обновлена себестоимость для 15 SKU", type: "update" },
  { date: "22.04.2026, 10:15", action: "Подключен маркетплейс Ozon", type: "connection" },
  { date: "21.04.2026, 18:45", action: "Экспортирован отчет по товарам", type: "export" },
  { date: "21.04.2026, 12:00", action: "Изменен тариф на Growth", type: "billing" },
  { date: "20.04.2026, 16:20", action: "Создан алерт для низких остатков", type: "alert" },
];

const stats = [
  { label: "Дней в системе", value: "45", icon: Calendar, color: "text-primary" },
  { label: "Активных подключений", value: "3", icon: Activity, color: "text-success" },
  { label: "Товаров под контролем", value: "289", icon: Package, color: "text-primary" },
  { label: "Активных алертов", value: "5", icon: AlertCircle, color: "text-destructive" },
];

export default function ProfilePage() {
  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Личный кабинет</h1>
        <p className="text-muted-foreground">Управление профилем и информацией о пользователе</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedCard delay={0.1} className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Информация о пользователе</CardTitle>
            <CardDescription>Личные данные и контактная информация</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="text-2xl">ИП</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl mb-1">Иван Петров</h2>
                    <Badge className="bg-success text-success-foreground">Growth Plan</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Edit className="w-4 h-4" />
                    Редактировать
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-muted-foreground">Email</div>
                      <div>ivan@company.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-muted-foreground">Телефон</div>
                      <div>+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-muted-foreground">Компания</div>
                      <div>ООО "Компания"</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-muted-foreground">Город</div>
                      <div>Москва</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
        <Card>
          <CardHeader>
            <CardTitle>Быстрая статистика</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
                <div className="text-2xl">{stat.value}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        </AnimatedCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Информация о компании</CardTitle>
            <CardDescription>Реквизиты и юридические данные</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Название организации</Label>
                <Input id="company-name" defaultValue="ООО 'Компания'" readOnly />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="inn">ИНН</Label>
                  <Input id="inn" defaultValue="7701234567" readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kpp">КПП</Label>
                  <Input id="kpp" defaultValue="770101001" readOnly />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Юридический адрес</Label>
                <Input id="address" defaultValue="Москва, ул. Примерная, д. 1, 123456" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ogrn">ОГРН</Label>
                <Input id="ogrn" defaultValue="1234567890123" readOnly />
              </div>
            </div>
            <div className="pt-4">
              <Button variant="outline" className="gap-2">
                <Edit className="w-4 h-4" />
                Редактировать реквизиты
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Последняя активность</CardTitle>
            <CardDescription>История действий в системе</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                Посмотреть всю историю
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Прогресс
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Профиль заполнен</span>
                <span className="text-muted-foreground">85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "85%" }} />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Осталось заполнить:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  Добавить фото профиля
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  Подключить Telegram бота
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Текущий тариф</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-2xl">Growth</div>
              <div className="text-sm text-muted-foreground">₽12,990 / месяц</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Активен до</span>
                <span className="text-muted-foreground">30.04.2026</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Использовано SKU</span>
                <span className="text-muted-foreground">289 / 500</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Изменить тариф
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Поддержка</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Нужна помощь? Свяжитесь с нами:</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href="mailto:support@sellscan.ru" className="text-primary hover:underline">
                    support@sellscan.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+7 (800) 555-35-35</span>
                </div>
              </div>
            </div>
            <Button className="w-full">
              Написать в поддержку
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </AnimatedPage>
  );
}
