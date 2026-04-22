import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { User, Bell, Shield, Globe } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";

export default function SettingsPage() {
  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Настройки</h1>
        <p className="text-muted-foreground">Управление настройками аккаунта</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Профиль
          </CardTitle>
          <CardDescription>Обновите личную информацию</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Полное имя</Label>
              <Input id="name" defaultValue="Иван Петров" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="ivan@company.ru" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Название компании</Label>
            <Input id="company" defaultValue="ООО Компания" />
          </div>
          <Button>Сохранить изменения</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Уведомления
          </CardTitle>
          <CardDescription>Настройте получение алертов и обновлений</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div>Email уведомления</div>
              <div className="text-sm text-muted-foreground">Получать алерты по email</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div>Telegram уведомления</div>
              <div className="text-sm text-muted-foreground">Мгновенные алерты в Telegram</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div>Ежедневный дайджест</div>
              <div className="text-sm text-muted-foreground">Ежедневная сводка ключевых метрик</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div>Алерты низкого остатка</div>
              <div className="text-sm text-muted-foreground">Уведомление при низком остатке</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div>Алерты негативной маржи</div>
              <div className="text-sm text-muted-foreground">Уведомление о товарах с негативной маржей</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Безопасность
          </CardTitle>
          <CardDescription>Управление безопасностью аккаунта</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Текущий пароль</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">Новый пароль</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Подтвердите новый пароль</Label>
            <Input id="confirm-password" type="password" />
          </div>
          <Button>Обновить пароль</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Предпочтения
          </CardTitle>
          <CardDescription>Настройте интерфейс под себя</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="language">Язык</Label>
            <select
              id="language"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background"
            >
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Часовой пояс</Label>
            <select
              id="timezone"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background"
            >
              <option value="moscow">Москва (UTC+3)</option>
              <option value="utc">UTC</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Валюта по умолчанию</Label>
            <select
              id="currency"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background"
            >
              <option value="rub">₽ RUB</option>
              <option value="usd">$ USD</option>
              <option value="eur">€ EUR</option>
            </select>
          </div>
          <Button>Сохранить настройки</Button>
        </CardContent>
      </Card>

      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Опасная зона</CardTitle>
          <CardDescription>Необратимые действия</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div>Удалить аккаунт</div>
              <div className="text-sm text-muted-foreground">
                Безвозвратно удалить аккаунт и все данные
              </div>
            </div>
            <Button variant="destructive">Удалить аккаунт</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </AnimatedPage>
  );
}
