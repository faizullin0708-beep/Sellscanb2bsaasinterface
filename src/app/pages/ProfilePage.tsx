import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Building2, Calendar, Activity, Package, AlertCircle, Edit, Link2, FileSpreadsheet, Bell, CreditCard, Clock } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { OnboardingChecklist } from "../components/OnboardingChecklist";
import { EmptyState } from "../components/EmptyState";
import { useNavigate } from "react-router";

export default function ProfilePage() {
  const navigate = useNavigate();

  const isNewUser = true;
  const userEmail = "user@example.com";
  const userName = null;
  const userPhone = null;
  const userCity = null;
  const daysInSystem = 1;

  const companyName = null;
  const companyINN = null;
  const companyKPP = null;
  const companyOGRN = null;
  const companyAddress = null;

  const hasActivity = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">Управление профилем, компанией и настройкой аккаунта</p>
        </div>

        {isNewUser && (
          <AnimatedCard delay={0.05}>
            <OnboardingChecklist />
          </AnimatedCard>
        )}

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
                    <AvatarFallback className="text-2xl">
                      {userName ? userName[0].toUpperCase() : userEmail[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl mb-1">{userName || "Имя не указано"}</h2>
                        <p className="text-sm text-muted-foreground">Новый аккаунт</p>
                      </div>
                      <Button variant="default" size="sm" className="gap-2">
                        <Edit className="w-4 h-4" />
                        Заполнить профиль
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-muted-foreground">Email</div>
                          <div>{userEmail}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-muted-foreground">Телефон</div>
                          <div className="text-muted-foreground">{userPhone || "Не указан"}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <div className="text-muted-foreground">Город</div>
                          <div className="text-muted-foreground">{userCity || "Не указан"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.15}>
            <Card>
              <CardHeader>
                <CardTitle>Быстрая статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-primary">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Дней в системе</div>
                      <div className="text-xs text-muted-foreground">С момента регистрации</div>
                    </div>
                  </div>
                  <div className="text-2xl">{daysInSystem}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Активных подключений</div>
                      <div className="text-xs text-muted-foreground">Подключите маркетплейс</div>
                    </div>
                  </div>
                  <div className="text-2xl text-muted-foreground">0</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Товаров под контролем</div>
                      <div className="text-xs text-muted-foreground">После синхронизации</div>
                    </div>
                  </div>
                  <div className="text-2xl text-muted-foreground">0</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Активных алертов</div>
                      <div className="text-xs text-muted-foreground">При проблемах с маржой</div>
                    </div>
                  </div>
                  <div className="text-2xl text-muted-foreground">0</div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedCard delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Информация о компании</CardTitle>
                <CardDescription>Реквизиты и юридические данные</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!companyName && !companyINN ? (
                  <div className="py-8">
                    <EmptyState
                      icon={Building2}
                      title="Реквизиты не заполнены"
                      description="Добавьте юридические данные компании для счетов, документов и настроек биллинга."
                      action={{
                        label: "Добавить реквизиты компании",
                        onClick: () => {},
                      }}
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground mb-1">Название организации</div>
                        <div>{companyName || "Не указано"}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">ИНН</div>
                        <div>{companyINN || "Не указан"}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">КПП</div>
                        <div>{companyKPP || "Не указан"}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">ОГРН</div>
                        <div>{companyOGRN || "Не указан"}</div>
                      </div>
                      <div className="col-span-2">
                        <div className="text-muted-foreground mb-1">Юридический адрес</div>
                        <div>{companyAddress || "Не указан"}</div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Edit className="w-4 h-4" />
                      Редактировать реквизиты
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.25}>
            <Card>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
                <CardDescription>История действий в системе</CardDescription>
              </CardHeader>
              <CardContent>
                {!hasActivity ? (
                  <EmptyState
                    icon={Clock}
                    title="Пока нет активности"
                    description="После подключения маркетплейса, импорта себестоимости, запуска синхронизации или изменения настроек здесь появится история действий."
                    action={{
                      label: "Подключить маркетплейс",
                      onClick: () => navigate("/app/connections"),
                    }}
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">История появится после первых действий</div>
                  </div>
                )}
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>

        <AnimatedCard delay={0.3}>
          <Card>
            <CardHeader>
              <CardTitle>Что сделать дальше</CardTitle>
              <CardDescription>Следующие шаги для начала работы с SellScan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Link2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Подключить маркетплейс</h4>
                    <p className="text-sm text-muted-foreground">
                      Добавьте API-ключ Wildberries, Ozon или Яндекс Маркета.
                    </p>
                  </div>
                  <Button size="sm" className="w-full" onClick={() => navigate("/app/connections")}>
                    Подключить
                  </Button>
                </div>

                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Импортировать себестоимость</h4>
                    <p className="text-sm text-muted-foreground">
                      Загрузите CSV-файл с закупочными ценами.
                    </p>
                  </div>
                  <Button size="sm" className="w-full" onClick={() => navigate("/app/costs")}>
                    Импортировать
                  </Button>
                </div>

                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Настроить Telegram-отчеты</h4>
                    <p className="text-sm text-muted-foreground">
                      Получайте ежедневный отчет о прибыли и проблемных SKU.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" onClick={() => navigate("/app/settings")}>
                    Настроить
                  </Button>
                </div>

                <div className="p-4 border border-border rounded-lg space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">Выбрать тариф</h4>
                    <p className="text-sm text-muted-foreground">
                      Активируйте пробный период или выберите подходящий тариф.
                    </p>
                  </div>
                  <Button size="sm" variant="outline" className="w-full" onClick={() => navigate("/app/billing")}>
                    Перейти к биллингу
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
