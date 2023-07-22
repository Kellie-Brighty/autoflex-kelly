import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import AgentRecentTransactionItemComponent, {
  AgentRecentTransactionItemComponentProps,
} from "@/components/agent/dashboard/recent-transaction-item";

const AgentRecentTransactionsComponent = () => {
  const [recentTransactions, setRecentTransactions] = useState<
    AgentRecentTransactionItemComponentProps[]
  >([]);

  useEffect(() => {
    setRecentTransactions([
      { type: "success", id: "#0001", date: "22nd Jul, 2023", amount: 368 },
      { type: "pending", id: "#0002", date: "22nd Jul, 2023", amount: 424 },
      { type: "error", id: "#0003", date: "22nd Jul, 2023", amount: 473 },
    ]);
  }, []);

  return (
    <div className={"w-full max-h-96 bg-white rounded-md overflow-auto"}>
      <div
        className={
          "p-6 flex items-center justify-between gap-3 border-b border-gray-main"
        }
      >
        <h3 className={"text-lg font-medium"}>Recent Transactions</h3>

        <button className={"flex items-center gap-2 text-primary"}>
          <span className={"font-medium"}>View All</span>
          <ArrowRightIcon className={"w-5 h-5"} />
        </button>
      </div>

      <div className={"divide-y divide-y-gray-main"}>
        {recentTransactions.map((transaction) => (
          <AgentRecentTransactionItemComponent
            key={transaction.id}
            type={transaction.type}
            id={transaction.id}
            date={transaction.date}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentRecentTransactionsComponent;
