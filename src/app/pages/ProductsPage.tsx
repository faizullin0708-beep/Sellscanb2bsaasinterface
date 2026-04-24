import { Card, CardContent } from "../components/ui/card";
import { Package } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { EmptyState } from "../components/EmptyState";
import { useNavigate } from "react-router";

export default function ProductsPage() {
  const navigate = useNavigate();
  const hasProducts = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Товары</h1>
          <p className="text-muted-foreground">Анализ прибыльности SKU</p>
        </div>

        <AnimatedCard delay={0.1}>
          <Card>
            <CardContent className="py-16">
              <EmptyState
                icon={Package}
                title="Товары еще не загружены"
                description="После синхронизации с маркетплейсами здесь появится список SKU с анализом прибыльности, остатков и маржинальности."
                action={{
                  label: "Подключить маркетплейс",
                  onClick: () => navigate("/app/connections"),
                }}
              />
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </AnimatedPage>
  );
}
