import React, { useEffect, useState } from "react";
import TableComponent, {
  TableHeader,
  TableRow,
} from "@/common/table/index.component";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";
import ButtonComponent from "@/common/button/index.component";
import SubscriberPolicyStatusChipsComponent from "../subscriber/policies/status-chips/index.component";

const PoliciesTable = () => {
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
    <div className={"p-6 bg-white rounded-md"}>
      {policiesRows.length !== 0 ? (
        <TableComponent
          headers={policiesHeaders}
          rows={policiesRows}
          totalPages={policiesTotalPages}
          currentPage={policiesCurrentPage}
          onPageChange={() => {}}
        />
      ) : (
        <div className={`text-center p-[50px]`}>
          <p className={`font-grotesk text-[20px] font-bold`}>
            No Policies yet
          </p>
          <p className={`text-[14px] text-[#94A3B8]`}>
            Policies will appear as soon as purchase have one
          </p>
        </div>
      )}
    </div>
  );
};

export default PoliciesTable;
