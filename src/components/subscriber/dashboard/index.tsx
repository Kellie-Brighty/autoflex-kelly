import SubscriberLayout from "@/layouts/subscriber/index.layout";
import React from "react";
import SubscriberPolicyStatsCardComponent from "@/components/subscriber/policies/stats-card/index.component";
import SubscriberPremiumHistoryChartComponent from "@/components/subscriber/dashboard/premium-history-chart";
import SubscriberNextPremiumComponent from "@/components/subscriber/dashboard/next-premium";
import SubscriberRecentPoliciesComponent from "@/components/subscriber/dashboard/recent-policies";
import SubscriberRecentTransactionsComponent from "@/components/subscriber/dashboard/recent-transactions";

const SubscriberDashboardComponent = () => {
  return (
    <SubscriberLayout
      title={"Overview"}
      caption={"View your policies and covers"}
    >
      <div className={"grid grid-cols-12 gap-8"}>
        <div className={"col-span-12 grid grid-cols-12 gap-8"}>
          <div className={"col-span-12 xl:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"total"}
              value={123}
              change={+12}
            />
          </div>

          <div className={"col-span-12 xl:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"active"}
              value={456}
              change={+16}
            />
          </div>

          <div className={"col-span-12 xl:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"pending"}
              value={789}
              change={-8}
            />
          </div>

          <div className={"col-span-12 xl:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"expired"}
              value={234}
              change={-4}
            />
          </div>
        </div>

        <div className={"col-span-12 xl:col-span-7"}>
          <SubscriberPremiumHistoryChartComponent />
        </div>

        <div className={"col-span-12 xl:col-span-5"}>
          <SubscriberNextPremiumComponent />
        </div>

        <div className={"col-span-12 xl:col-span-7"}>
          <SubscriberRecentPoliciesComponent />
        </div>

        <div className={"col-span-12 xl:col-span-5"}>
          <SubscriberRecentTransactionsComponent />
        </div>
      </div>
    </SubscriberLayout>
  );
};

export default SubscriberDashboardComponent;
