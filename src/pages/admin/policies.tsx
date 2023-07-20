import DashboardStatistics from "@/components/admin/DashboardStatistics";
import PoliciesTable from "@/components/admin/PoliciesTable";
import AdminLayout from "@/layouts/admin/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import ExportButtonComponent from "@/common/export-btn/index.component";

const Policies = () => {
  return (
    <AdminLayout title="Policies" caption="View your policies and covers">
      <div className={`space-y-8`}>
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

        <PoliciesTable />
      </div>
    </AdminLayout>
  );
};

export default Policies;
