import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Filter, Download, TrendingUp, TrendingDown } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "motion/react";

const productsData = [
  { sku: "WB-12345", marketplace: "WB", name: "Куртка зимняя Premium", revenue: 45000, fees: 6750, logistics: 3600, costPrice: 22000, profit: 12650, margin: 28.1, stock: 45, daysLeft: 15, status: "good" },
  { sku: "OZ-67890", marketplace: "Ozon", name: "Кроссовки спортивные", revenue: 32000, fees: 4800, logistics: 2400, costPrice: 15900, profit: 8900, margin: 27.8, stock: 68, daysLeft: 22, status: "good" },
  { sku: "YM-34567", marketplace: "YM", name: "Рюкзак городской", revenue: 18000, fees: 2160, logistics: 1440, costPrice: 7200, profit: 7200, margin: 40.0, stock: 124, daysLeft: 45, status: "good" },
  { sku: "WB-98765", marketplace: "WB", name: "Джинсы классические", revenue: 15000, fees: 2250, logistics: 1950, costPrice: 13100, profit: -2300, margin: -15.3, stock: 89, daysLeft: 30, status: "loss" },
  { sku: "OZ-54321", marketplace: "Ozon", name: "Футболка базовая", revenue: 8000, fees: 1200, logistics: 800, costPrice: 7800, profit: -1800, margin: -22.5, stock: 156, daysLeft: 52, status: "loss" },
  { sku: "WB-44444", marketplace: "WB", name: "Толстовка с капюшоном", revenue: 22000, fees: 3300, logistics: 1800, costPrice: 13500, profit: 3400, margin: 15.5, stock: 12, daysLeft: 3, status: "low_stock" },
  { sku: "OZ-55555", marketplace: "Ozon", name: "Перчатки кожаные", revenue: 12000, fees: 1800, logistics: 960, costPrice: 6800, profit: 2440, margin: 20.3, stock: 24, daysLeft: 5, status: "low_stock" },
  { sku: "YM-66666", marketplace: "YM", name: "Шарф кашемировый", revenue: 16000, fees: 1920, logistics: 1280, costPrice: 8500, profit: 4300, margin: 26.9, stock: 35, daysLeft: 7, status: "low_stock" },
  { sku: "WB-77777", marketplace: "WB", name: "Ботинки зимние", revenue: 52000, fees: 7800, logistics: 4160, costPrice: 28000, profit: 12040, margin: 23.2, stock: 78, daysLeft: 26, status: "good" },
  { sku: "OZ-88888", marketplace: "Ozon", name: "Платье вечернее", revenue: 38000, fees: 5700, logistics: 3040, costPrice: 19000, profit: 10260, margin: 27.0, stock: 42, daysLeft: 14, status: "good" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [marketplaceFilter, setMarketplaceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMarketplace = marketplaceFilter === "all" || product.marketplace === marketplaceFilter;
    const matchesStatus = statusFilter === "all" || product.status === statusFilter;
    return matchesSearch && matchesMarketplace && matchesStatus;
  });

  return (
    <AnimatedPage>
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Товары</h1>
        <p className="text-muted-foreground">Анализ прибыльности SKU</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Поиск по SKU или названию товара..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={marketplaceFilter} onValueChange={setMarketplaceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Маркетплейс" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все маркетплейсы</SelectItem>
                <SelectItem value="WB">Wildberries</SelectItem>
                <SelectItem value="Ozon">Ozon</SelectItem>
                <SelectItem value="YM">Яндекс Маркет</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="good">Прибыльные</SelectItem>
                <SelectItem value="loss">Негативная маржа</SelectItem>
                <SelectItem value="low_stock">Низкий остаток</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Экспорт
            </Button>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>SKU</TableHead>
                  <TableHead>Маркетплейс</TableHead>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Выручка</TableHead>
                  <TableHead className="text-right">Комиссии</TableHead>
                  <TableHead className="text-right">Логистика</TableHead>
                  <TableHead className="text-right">Себестоимость</TableHead>
                  <TableHead className="text-right">Прибыль</TableHead>
                  <TableHead className="text-right">Маржа</TableHead>
                  <TableHead className="text-right">Остаток</TableHead>
                  <TableHead className="text-right">Дней осталось</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product, index) => (
                  <motion.tr
                    key={product.sku}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="hover:bg-muted/50 border-b border-border"
                  >
                    <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.marketplace}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate">{product.name}</div>
                    </TableCell>
                    <TableCell className="text-right">₽{product.revenue.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-muted-foreground">₽{product.fees.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-muted-foreground">₽{product.logistics.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-muted-foreground">₽{product.costPrice.toLocaleString()}</TableCell>
                    <TableCell className={`text-right ${product.profit >= 0 ? "text-success" : "text-destructive"}`}>
                      <div className="flex items-center justify-end gap-1">
                        {product.profit >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        ₽{product.profit.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell className={`text-right ${product.margin >= 0 ? "text-success" : "text-destructive"}`}>
                      {product.margin.toFixed(1)}%
                    </TableCell>
                    <TableCell className="text-right">{product.stock}</TableCell>
                    <TableCell className="text-right">
                      {product.daysLeft < 7 ? (
                        <span className="text-warning">{product.daysLeft} дней</span>
                      ) : (
                        <span>{product.daysLeft} дней</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {product.status === "loss" && (
                        <Badge variant="destructive">Убыток</Badge>
                      )}
                      {product.status === "low_stock" && (
                        <Badge className="bg-warning text-warning-foreground">Низкий остаток</Badge>
                      )}
                      {product.status === "good" && (
                        <Badge variant="secondary" className="text-success">Хорошо</Badge>
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Показано {filteredProducts.length} из {productsData.length} товаров
          </div>
        </CardContent>
      </Card>
    </div>
    </AnimatedPage>
  );
}
