import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Upload, Download, FileText, CheckCircle, AlertCircle, Edit } from "lucide-react";
import { Badge } from "../components/ui/badge";
import AnimatedPage from "../components/AnimatedPage";

const recentImports = [
  {
    id: 1,
    filename: "costs_april_2026.csv",
    date: "21.04.2026 14:30",
    rowsImported: 124,
    status: "success",
  },
  {
    id: 2,
    filename: "costs_march_2026.csv",
    date: "01.04.2026 10:15",
    rowsImported: 118,
    status: "success",
  },
  {
    id: 3,
    filename: "costs_february_2026.csv",
    date: "28.02.2026 16:45",
    rowsImported: 95,
    status: "success",
  },
];

const currentCosts = [
  { sku: "WB-12345", product: "Куртка зимняя Premium", costPrice: 22000, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "OZ-67890", product: "Кроссовки спортивные", costPrice: 15900, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "YM-34567", product: "Рюкзак городской", costPrice: 7200, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "WB-98765", product: "Джинсы классические", costPrice: 13100, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "OZ-54321", product: "Футболка базовая", costPrice: 7800, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "WB-44444", product: "Толстовка с капюшоном", costPrice: 13500, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "OZ-55555", product: "Перчатки кожаные", costPrice: 6800, currency: "₽", updatedAt: "21.04.2026" },
  { sku: "YM-66666", product: "Шарф кашемировый", costPrice: 8500, currency: "₽", updatedAt: "21.04.2026" },
];

export default function CostsPage() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop
    console.log("Files dropped:", e.dataTransfer.files);
  };

  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Управление себестоимостью</h1>
        <p className="text-muted-foreground">Импорт и управление себестоимостью товаров</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Импорт себестоимости
            </CardTitle>
            <CardDescription>Загрузите CSV файл для массового обновления</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive ? "border-primary bg-primary/5" : "border-border"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2">Перетащите CSV файл сюда</h3>
              <p className="text-sm text-muted-foreground mb-4">или</p>
              <Button>Выбрать файл</Button>
              <p className="text-xs text-muted-foreground mt-4">Поддерживаемый формат: CSV (макс 10MB)</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm">Требования к формату CSV:</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Колонка 1: SKU (обязательно)</li>
                <li>Колонка 2: Себестоимость (обязательно, только цифры)</li>
                <li>Колонка 3: Валюта (опционально, по умолчанию ₽)</li>
              </ul>
            </div>

            <Button variant="outline" className="w-full gap-2">
              <Download className="w-4 h-4" />
              Скачать шаблон CSV
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Последние импорты
            </CardTitle>
            <CardDescription>История импорта себестоимости</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentImports.map((importItem) => (
                <div
                  key={importItem.id}
                  className="flex items-start justify-between p-3 border border-border rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    {importItem.status === "success" ? (
                      <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <div className="text-sm">{importItem.filename}</div>
                      <div className="text-xs text-muted-foreground">
                        {importItem.date} • {importItem.rowsImported} rows
                      </div>
                    </div>
                  </div>
                  <Badge variant={importItem.status === "success" ? "default" : "destructive"} className={importItem.status === "success" ? "bg-success text-success-foreground" : ""}>
                    {importItem.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Текущая себестоимость</CardTitle>
              <CardDescription>Вся себестоимость товаров в системе</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Экспорт
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Ручное редактирование
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>SKU</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Себестоимость</TableHead>
                  <TableHead>Валюта</TableHead>
                  <TableHead>Обновлено</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentCosts.map((cost) => (
                  <TableRow key={cost.sku} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-sm">{cost.sku}</TableCell>
                    <TableCell>{cost.product}</TableCell>
                    <TableCell className="text-right">{cost.costPrice.toLocaleString()}</TableCell>
                    <TableCell>{cost.currency}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{cost.updatedAt}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Изменить</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Показано {currentCosts.length} записей
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Инструкция по импорту</CardTitle>
          <CardDescription>Как подготовить CSV файл с себестоимостью</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</div>
              Подготовьте CSV файл
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Создайте CSV файл с тремя колонками: SKU, Себестоимость и Валюта. Убедитесь, что SKU точно совпадают с вашими товарами на маркетплейсах.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</div>
              Загрузите и сопоставьте колонки
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Загрузите CSV файл, и система автоматически определит колонки. Проверьте сопоставление перед продолжением.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</div>
              Проверьте и импортируйте
            </h4>
            <p className="text-sm text-muted-foreground ml-8">
              Просмотрите предпросмотр изменений и нажмите "Импорт" для обновления. Система сразу пересчитает маржинальность.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    </AnimatedPage>
  );
}
