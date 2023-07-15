import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";

export default function AdminOverview() {
  return (
    <AdminLayout
      title={"Welcome back Admin 👋"}
      caption={"Monday, 05 Agust 2022"}
    >
      <DashboardStatistics /> 
    </AdminLayout>
  );
}
