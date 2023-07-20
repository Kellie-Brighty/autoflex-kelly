import ExportButtonComponent from "@/common/export-btn/index.component";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormInputComponent from "@/common/form-input/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import DashboardStatistics from "@/components/admin/DashboardStatistics";
import ManagmentReportsTable from "@/components/admin/ManagmentReportsTable";
import AdminLayout from "@/layouts/admin/index.layout";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ManagementReport = () => {
  return (
    <AdminLayout
      title="Management Report"
      caption="View and manage management report"
    >
      <div className={`space-y-8`}>
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

        <ManagmentReportsTable />
      </div>
    </AdminLayout>
  );
};

export default ManagementReport;
