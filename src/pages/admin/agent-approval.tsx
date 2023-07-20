import ExportButtonComponent from "@/common/export-btn/index.component";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormInputComponent from "@/common/form-input/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import AgentApprovalTable from "@/components/admin/AgentApprovalTable";
import DashboardStatistics from "@/components/admin/DashboardStatistics";
import AdminLayout from "@/layouts/admin/index.layout";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const AgentApproval = () => {
  return (
    <AdminLayout
      title="Agent Approval"
      caption="View agents and approve their application"
    >
      <div className={`space-y-8`}>
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

        <div className={"flex items-center justify-between gap-8"}>
          <FormInputComponent
            placeholder={"Search Anything"}
            Icon={<MagnifyingGlassIcon className={"w-5 h-5"} />}
          />

          <div className={"flex items-center gap-3"}>
            <FormDateRangePickerComponent value={null} onChange={() => {}} />
            <FormSelectComponent Icon={<FunnelIcon className={"w-5 h-5"} />}>
              <option>All Policies</option>
              <option>All Policies</option>
              <option>All Policies</option>
            </FormSelectComponent>
            <ExportButtonComponent />
          </div>
        </div>

        <AgentApprovalTable />
      </div>
    </AdminLayout>
  );
};

export default AgentApproval;
