import AgentLayout from "@/layouts/agent/index.layout";
import FormInputComponent from "@/common/form-input/index.component";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FormDateRangePickerComponent from "@/common/form-date-range-picker/index.component";
import FormSelectComponent from "@/common/form-select/index.component";
import TableComponent, {
  TableHeader,
  TableRow,
} from "@/common/table/index.component";
import AgentCommissionStatsCardComponent from "@/components/agent/commission/stats-card";
import { useEffect, useState } from "react";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";
import SubscriberPolicyStatusChipsComponent from "@/components/subscriber/policies/status-chips/index.component";
import ButtonComponent from "@/common/button/index.component";

const AgentCommissionComponent = () => {
  const [commissionsHeaders, setCommissionsHeaders] = useState<TableHeader[]>(
    [],
  );
  const [commissionsRows, setCommissionsRows] = useState<TableRow[]>([]);

  const [commissionsTotalPages, setCommissionsTotalPages] = useState<number>(0);
  const [commissionsCurrentPage, setCommissionsCurrentPage] =
    useState<number>(0);

  useEffect(() => {
    setCommissionsHeaders([
      { id: 0, label: <FormCheckboxComponent /> },
      { id: 1, label: <span>Commission</span> },
      { id: 2, label: <span>Policy Number</span> },
      { id: 3, label: <span>Premium</span> },
      { id: 4, label: <span>Start Date</span> },
      { id: 5, label: <span>Expiring Date</span> },
      { id: 6, label: <span>Status</span> },
      { id: 7, label: <span>Actions</span> },
    ]);

    setCommissionsRows([
      {
        id: 1,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>₦625,000</span>,
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
          1: <span>₦625,000</span>,
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
          1: <span>₦625,000</span>,
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
          1: <span>₦625,000</span>,
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

    setCommissionsTotalPages(50);
    setCommissionsCurrentPage(1);
  }, []);

  return (
    <AgentLayout
      title={"Commission"}
      caption={"View your commission from policies."}
    >
      <div className={"space-y-8"}>
        <div className={"grid grid-cols-12 gap-8"}>
          <div className={"col-span-12 lg:col-span-3"}>
            <AgentCommissionStatsCardComponent
              type={"total"}
              value={123}
              change={+12}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <AgentCommissionStatsCardComponent
              type={"active"}
              value={456}
              change={+16}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <AgentCommissionStatsCardComponent
              type={"pending"}
              value={789}
              change={-8}
            />
          </div>

          <div className={"col-span-12 lg:col-span-3"}>
            <AgentCommissionStatsCardComponent
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
            headers={commissionsHeaders}
            rows={commissionsRows}
            totalPages={commissionsTotalPages}
            currentPage={commissionsCurrentPage}
            onPageChange={() => {}}
          />
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentCommissionComponent;
