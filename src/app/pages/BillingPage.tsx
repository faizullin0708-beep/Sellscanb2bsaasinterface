import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CheckCircle, CreditCard, Download, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import AnimatedPage from "../components/AnimatedPage";

const invoices = [
  { id: "INV-2026-04", date: "01.04.2026", amount: "₽12,990", status: "paid", downloadUrl: "#" },
  { id: "INV-2026-03", date: "01.03.2026", amount: "₽12,990", status: "paid", downloadUrl: "#" },
  { id: "INV-2026-02", date: "01.02.2026", amount: "₽12,990", status: "paid", downloadUrl: "#" },
  { id: "INV-2026-01", date: "01.01.2026", amount: "₽12,990", status: "paid", downloadUrl: "#" },
];

export default function BillingPage() {
  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Биллинг</h1>
        <p className="text-muted-foreground">Управление подпиской и платежной информацией</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Текущий тариф</CardTitle>
                <CardDescription>Вы используете тариф Growth</CardDescription>
              </div>
              <Badge className="bg-success text-success-foreground">Активен</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="space-y-1">
                <div className="text-2xl">Growth Plan</div>
                <div className="text-muted-foreground">Up to 500 SKUs, all marketplaces</div>
              </div>
              <div className="text-right">
                <div className="text-3xl">₽12,990</div>
                <div className="text-sm text-muted-foreground">per month</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>До 500 SKU</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Все маркетплейсы (WB, Ozon, YM)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Умные алерты</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Telegram интеграция</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span>Экспорт данных</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <Button>Перейти на Pro</Button>
              <Button variant="outline">Сменить тариф</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Платежный цикл
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Текущий период</div>
              <div>01.04.2026 - 30.04.2026</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Следующее списание</div>
              <div>01.05.2026</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Сумма к оплате</div>
              <div className="text-2xl">₽12,990</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Способ оплаты
          </CardTitle>
          <CardDescription>Управление способами оплаты</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div>Visa •••• 4242</div>
                <div className="text-sm text-muted-foreground">Действительна до 12/2027</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-success text-success-foreground">По умолчанию</Badge>
              <Button variant="outline" size="sm">Изменить</Button>
            </div>
          </div>
          <Button variant="outline">Добавить способ оплаты</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Использование в этом месяце</CardTitle>
            <CardDescription>Текущее использование vs лимиты тарифа</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Активных SKU</span>
                <span className="text-muted-foreground">289 / 500</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "57.8%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Вызовов API</span>
                <span className="text-muted-foreground">12,450 / Безлимит</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "25%" }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Экспорт данных</span>
                <span className="text-muted-foreground">8 / Безлимит</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-success h-2 rounded-full" style={{ width: "10%" }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Платежный адрес</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div>ООО "Компания"</div>
              <div className="text-sm text-muted-foreground">
                ИНН: 7701234567
                <br />
                КПП: 770101001
                <br />
                Москва, ул. Примерная, д. 1
                <br />
                123456
              </div>
            </div>
            <Button variant="outline">Изменить адрес</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>История счетов</CardTitle>
          <CardDescription>Просмотр и загрузка прошлых счетов</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID счета</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-mono text-sm">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge variant="default" className="bg-success text-success-foreground">
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Скачать
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Перейти на Pro</CardTitle>
          <CardDescription>Безлимитные SKU и расширенные возможности</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="text-2xl">₽24,990 / месяц</div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Безлимит SKU
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Доступ к API
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Приоритетная поддержка
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Кастомные интеграции
                </li>
              </ul>
            </div>
            <Button size="lg">Перейти</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </AnimatedPage>
  );
}
