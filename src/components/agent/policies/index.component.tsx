import SubscriberPolicyStatsCardComponent from "@/components/subscriber/policies/stats-card/index.component";
import FormInputComponent from "@/common/form-input/index.component";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import TableComponent, {
  TableHeader,
  TableRow,
} from "@/common/table/index.component";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";
import SubscriberPolicyStatusChipsComponent from "@/components/subscriber/policies/status-chips/index.component";
import ButtonComponent from "@/common/button/index.component";
import { useEffect, useState } from "react";
import AgentLayout from "@/layouts/agent/index.layout";

const AgentPoliciesComponent = () => {
  const [policiesHeaders, setPoliciesHeaders] = useState<TableHeader[]>([]);
  const [policiesRows, setPoliciesRows] = useState<TableRow[]>([]);

  const [policiesTotalPages, setPoliciesTotalPages] = useState<number>(0);
  const [policiesCurrentPage, setPoliciesCurrentPage] = useState<number>(0);

  useEffect(() => {
    setPoliciesHeaders([
      { id: 0, label: <FormCheckboxComponent /> },
      { id: 1, label: <span>Policy Name</span> },
      { id: 2, label: <span>Policy Number</span> },
      { id: 3, label: <span>Premium</span> },
      { id: 4, label: <span>Start Date</span> },
      { id: 5, label: <span>Expiring Date</span> },
      { id: 6, label: <span>Status</span> },
      { id: 7, label: <span>Actions</span> },
    ]);

    setPoliciesRows([
      {
        id: 1,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Auto Insurance - Monthly</span>,
          2: <span>UIC/ERT/MIZP/164</span>,
          3: <span>₦625,000</span>,
          4: <span>01.01.2022</span>,
          5: <span>01.01.2022</span>,
          6: <SubscriberPolicyStatusChipsComponent type={"active"} />,
          7: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              <span>View Details</span>
            </ButtonComponent>
          ),
        },
      },
      {
        id: 2,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Auto Insurance - Monthly</span>,
          2: <span>UIC/ERT/MIZP/164</span>,
          3: <span>₦625,000</span>,
          4: <span>01.01.2022</span>,
          5: <span>01.01.2022</span>,
          6: <SubscriberPolicyStatusChipsComponent type={"abandoned"} />,
          7: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              <span>View Details</span>
            </ButtonComponent>
          ),
        },
      },
      {
        id: 3,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Auto Insurance - Monthly</span>,
          2: <span>UIC/ERT/MIZP/164</span>,
          3: <span>₦625,000</span>,
          4: <span>01.01.2022</span>,
          5: <span>01.01.2022</span>,
          6: <SubscriberPolicyStatusChipsComponent type={"awaiting"} />,
          7: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              <span>View Details</span>
            </ButtonComponent>
          ),
        },
      },
      {
        id: 4,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Auto Insurance - Monthly</span>,
          2: <span>UIC/ERT/MIZP/164</span>,
          3: <span>₦625,000</span>,
          4: <span>01.01.2022</span>,
          5: <span>01.01.2022</span>,
          6: <SubscriberPolicyStatusChipsComponent type={"expired"} />,
          7: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              <span>View Details</span>
            </ButtonComponent>
          ),
        },
      },
    ]);

    setPoliciesTotalPages(50);
    setPoliciesCurrentPage(1);
  }, []);

  return (
    <AgentLayout title={"Policies"} caption={"View your policies and covers."}>
      <div className={"space-y-8"}>
        <div className={"grid grid-cols-12 gap-8"}>
          <div className={"col-span-12 lg:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"total"}
              value={123}
              change={+12}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"active"}
              value={456}
              change={+16}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"pending"}
              value={789}
              change={-8}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <SubscriberPolicyStatsCardComponent
              type={"expired"}
              value={234}
              change={-4}
            />
          </div>
        </div>

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
          </div>
        </div>

        <div className={"p-6 bg-white rounded-md"}>
          <TableComponent
            headers={policiesHeaders}
            rows={policiesRows}
            totalPages={policiesTotalPages}
            currentPage={policiesCurrentPage}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentPoliciesComponent;
