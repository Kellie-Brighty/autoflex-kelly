import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";

const AgentApproval = () => {
  return (
    <AdminLayout
      title="Agent Approval"
      caption="View agents and approve their application"
    >
      <DashboardStatistics
        firstBoxImageUrl="/assets/admin/total-agents.png"
        firstBoxTitle="Total Agents"
        firstBoxPrice="40,555"
        secondBoxImageUrl="/assets/admin/pending-agents.png"
        secondBoxTitle="Pending Agents"
        secondBoxPrice="40,555"
        thirdBoxImageUrl="/assets/admin/approved-agents.png"
        thirdBoxTitle="Approved Agents"
        thirdBoxPrice="40,555"
        fourthBoxImageUrl="/assets/admin/rejected-agents.png"
        fourthBoxTitle="Rejected Agents"
        fourthBoxPrice="40,555"
      />
    </AdminLayout>
  );
};

export default AgentApproval;
