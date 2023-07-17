import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";

const ManagementReport = () => {
  return (
    <AdminLayout
      title="Management Report"
      caption="View and manage management report"
    >
      <DashboardStatistics
        firstBoxImageUrl="/assets/admin/total-premium.png"
        firstBoxTitle="Gains"
        firstBoxPrice="404,555.00"
        secondBoxImageUrl="/assets/admin/total-commissions.png"
        secondBoxTitle="Losses"
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

export default ManagementReport;
