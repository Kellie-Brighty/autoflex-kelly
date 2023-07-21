import { ArrowRightIcon } from "@heroicons/react/24/outline";
import TableComponent, { TableRow } from "@/common/table/index.component";
import React, { useEffect, useState } from "react";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";
import SubscriberPolicyStatusChipsComponent from "@/components/subscriber/policies/status-chips/index.component";
import ButtonComponent from "@/common/button/index.component";

const SubscriberRecentPoliciesComponent = () => {
  const [recentPoliciesHeaders, setRecentPoliciesHeaders] = useState([
    { id: 1, label: <FormCheckboxComponent /> },
    { id: 2, label: <span>Policy</span> },
    { id: 3, label: <span>Premium</span> },
    { id: 4, label: <span>Effective Date</span> },
    { id: 5, label: <span>Status</span> },
    { id: 6, label: <span>Active</span> },
  ]);
  const [recentPoliciesRows, setRecentPoliciesRows] = useState<TableRow[]>([]);

  useEffect(() => {
    setRecentPoliciesRows([
      {
        id: 1,
        data: {
          1: <FormCheckboxComponent />,
          2: <span>Auto Insurance - Monthly</span>,
          3: <span>₦625,000</span>,
          4: <span>22nd Jul, 2023</span>,
          5: <SubscriberPolicyStatusChipsComponent type={"pending"} />,
          6: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              View Details
            </ButtonComponent>
          ),
        },
      },
      {
        id: 2,
        data: {
          1: <FormCheckboxComponent />,
          2: <span>Auto Insurance - Monthly</span>,
          3: <span>₦625,000</span>,
          4: <span>22nd Jul, 2023</span>,
          5: <SubscriberPolicyStatusChipsComponent type={"awaiting"} />,
          6: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              View Details
            </ButtonComponent>
          ),
        },
      },
      {
        id: 3,
        data: {
          1: <FormCheckboxComponent />,
          2: <span>Auto Insurance - Monthly</span>,
          3: <span>₦625,000</span>,
          4: <span>22nd Jul, 2023</span>,
          5: <SubscriberPolicyStatusChipsComponent type={"active"} />,
          6: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              View Details
            </ButtonComponent>
          ),
        },
      },
      {
        id: 4,
        data: {
          1: <FormCheckboxComponent />,
          2: <span>Auto Insurance - Monthly</span>,
          3: <span>₦625,000</span>,
          4: <span>22nd Jul, 2023</span>,
          5: <SubscriberPolicyStatusChipsComponent type={"abandoned"} />,
          6: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              View Details
            </ButtonComponent>
          ),
        },
      },
      {
        id: 5,
        data: {
          1: <FormCheckboxComponent />,
          2: <span>Auto Insurance - Monthly</span>,
          3: <span>₦625,000</span>,
          4: <span>22nd Jul, 2023</span>,
          5: <SubscriberPolicyStatusChipsComponent type={"expired"} />,
          6: (
            <ButtonComponent size={"sm"} variant={"outlined"}>
              View Details
            </ButtonComponent>
          ),
        },
      },
    ]);
  }, []);

  return (
    <div className={"w-full h-full max-h-96 bg-white rounded-md overflow-auto"}>
      <div
        className={
          "p-6 flex items-center justify-between gap-3 border-b border-gray-main"
        }
      >
        <h3 className={"text-lg font-medium"}>Recent Policies</h3>

        <button className={"flex items-center gap-2 text-primary"}>
          <span className={"font-medium"}>View All</span>
          <ArrowRightIcon className={"w-5 h-5"} />
        </button>
      </div>

      <div className={"p-6"}>
        <TableComponent
          headers={recentPoliciesHeaders}
          rows={recentPoliciesRows}
          paginate={false}
          totalPages={1}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default SubscriberRecentPoliciesComponent;
