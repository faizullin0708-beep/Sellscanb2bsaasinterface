import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/app";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl text-primary mb-2">SellScan</div>
          <CardTitle>Добро пожаловать</CardTitle>
          <CardDescription>Войдите в свой аккаунт</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-muted-foreground">Запомнить меня</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                Забыли пароль?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Войти
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Зарегистрироваться
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
