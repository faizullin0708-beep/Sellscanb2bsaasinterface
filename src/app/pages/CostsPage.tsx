import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { FileSpreadsheet } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { EmptyState } from "../components/EmptyState";

export default function CostsPage() {
  const hasCosts = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Себестоимость</h1>
          <p className="text-muted-foreground">Управление закупочными ценами товаров</p>
        </div>

        <AnimatedCard delay={0.1}>
          <Card>
            <CardContent className="py-16">
              <EmptyState
                icon={FileSpreadsheet}
                title="Себестоимость не загружена"
                description="Импортируйте CSV-файл с закупочными ценами товаров, чтобы SellScan рассчитал реальную прибыль и маржу по каждому SKU."
                action={{
                  label: "Импортировать CSV",
                  onClick: () => {},
                }}
              />
            </CardContent>
          </Card>
        </AnimatedCard>

        <AnimatedCard delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>Формат CSV файла</CardTitle>
              <CardDescription>Требования к импортируемому файлу</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm">
                  CSV файл должен содержать следующие колонки:
                </p>
                <div className="p-4 bg-muted rounded-lg font-mono text-sm">
                  SKU, Себестоимость
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Пример данных в файле:
                </p>
                <div className="p-4 bg-muted rounded-lg font-mono text-sm space-y-1">
                  <div>WB-12345, 15000</div>
                  <div>OZ-67890, 8500</div>
                  <div>YM-34567, 12000</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
}
