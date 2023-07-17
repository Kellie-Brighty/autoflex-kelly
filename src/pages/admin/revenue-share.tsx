import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";
import React from "react";

const RevenueShare = () => {
  return (
    <AdminLayout title="Revenue Share" caption="View and manage your revenue">
      <DashboardStatistics
        firstBoxImageUrl="/assets/admin/total-premium.png"
        firstBoxTitle="Total Premium"
        firstBoxPrice="404,555.00"
        secondBoxImageUrl="/assets/admin/total-commissions.png"
        secondBoxTitle="Total Commission"
        secondBoxPrice="40,555"
        thirdBoxImageUrl="/assets/admin/total-agents.png"
        thirdBoxTitle="Total Agents"
        thirdBoxPrice="40,555"
        fourthBoxImageUrl="/assets/admin/total-subscribers.png"
        fourthBoxTitle="Total Subscribers"
        fourthBoxPrice="40,555"
      />
    </AdminLayout>
  );
};

export default RevenueShare;
