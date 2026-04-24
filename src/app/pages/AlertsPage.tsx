import { Card, CardContent } from "../components/ui/card";
import { Bell } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedCard from "../components/AnimatedCard";
import { EmptyState } from "../components/EmptyState";
import { useNavigate } from "react-router";

export default function AlertsPage() {
  const navigate = useNavigate();
  const hasAlerts = false;

  return (
    <AnimatedPage>
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl mb-2">Алерты</h1>
          <p className="text-muted-foreground">Уведомления и проблемы, требующие внимания</p>
        </div>

        <AnimatedCard delay={0.1}>
          <Card>
            <CardContent className="py-16">
              <EmptyState
                icon={Bell}
                title="Алертов пока нет"
                description="Алерты появятся при проблемах с маржой, остатками, возвратами или другими показателями товаров."
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
