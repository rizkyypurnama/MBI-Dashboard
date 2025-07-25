import React from "react";
import Card from "./card";
import FinanceSummaryTable from "./financeSummaryTable";
export default function DashboardContent() {
  return (
    <main className="flex flex-col gap-6 p-4 sm:p-6 bg-[#f8f9fb] min-h-screen">
      <div className="text-xs text-gray-500">Финансовый департамент → Транзакции → Прямые расходы</div>
      <Card />  
      <FinanceSummaryTable />
    </main>
  );
}
