import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function SignUpPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/app";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl text-primary mb-2">SellScan</div>
          <CardTitle>Создать аккаунт</CardTitle>
          <CardDescription>Начните отслеживать прибыль на маркетплейсах</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Полное имя</Label>
              <Input
                id="name"
                type="text"
                placeholder="Иван Петров"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ваш@email.ru"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="text-xs text-muted-foreground">
              Создавая аккаунт, вы соглашаетесь с{" "}
              <a href="#" className="text-primary hover:underline">
                Условиями использования
              </a>{" "}
              и{" "}
              <a href="#" className="text-primary hover:underline">
                Политикой конфиденциальности
              </a>
              .
            </div>
            <Button type="submit" className="w-full">
              Создать аккаунт
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Войти
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
