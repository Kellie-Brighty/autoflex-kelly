import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";

const Policies = () => {
  return (
    <AdminLayout title="Policies" caption="View your policies and covers">
      <DashboardStatistics
        firstBoxImageUrl="/assets/admin/active-policies.png"
        firstBoxTitle="Active Policies"
        firstBoxPrice="40,555"
        secondBoxImageUrl="/assets/admin/active-renewals.png"
        secondBoxTitle="Awaiting Renewals"
        secondBoxPrice="40,555"
        thirdBoxImageUrl="/assets/admin/deactivated-policies.png"
        thirdBoxTitle="Deactivated Policies"
        thirdBoxPrice="40,555"
        fourthBoxImageUrl="/assets/admin/expired-policies.png"
        fourthBoxTitle="Expired Policies"
        fourthBoxPrice="40,555"
      />
    </AdminLayout>
  );
};

export default Policies;
