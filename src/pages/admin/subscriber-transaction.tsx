import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";
import React from "react";

const SubscriberTransaction = () => {
  return (
    <AdminLayout
      title="Subscriber Transaction"
      caption="View and manage subscriber transaction report"
    >
      <DashboardStatistics
        firstBoxImageUrl="/assets/admin/active-policies.png"
        firstBoxTitle="Total Active Policies"
        firstBoxPrice="404,555.00"
        secondBoxImageUrl="/assets/admin/expired-policies.png"
        secondBoxTitle="Total Inactive Policies"
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

export default SubscriberTransaction;
