import ExportButtonComponent from "@/common/export-btn/index.component";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormInputComponent from "@/common/form-input/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import DashboardStatistics from "@/components/admin/DashboardStatistics";
import SubscriberTransactionTable from "@/components/admin/SubscriberTransactionTable";
import AdminLayout from "@/layouts/admin/index.layout";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const SubscriberTransaction = () => {
  return (
    <AdminLayout
      title="Subscriber Transaction"
      caption="View and manage subscriber transaction report"
    >
      <div className={`space-y-8`}>
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

        <SubscriberTransactionTable />
      </div>
    </AdminLayout>
  );
};

export default SubscriberTransaction;
