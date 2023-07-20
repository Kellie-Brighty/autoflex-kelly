import React, { useEffect, useState } from "react";
import TableComponent, {
  TableHeader,
  TableRow,
} from "@/common/table/index.component";
import FormCheckboxComponent from "@/common/form-checkbox/index.component";
import ButtonComponent from "@/common/button/index.component";
import SubscriberPolicyStatusChipsComponent from "../subscriber/policies/status-chips/index.component";
import Image from "next/image";

const AgentApprovalTable = () => {
  const [policiesHeaders, setPoliciesHeaders] = useState<TableHeader[]>([]);
  const [policiesRows, setPoliciesRows] = useState<TableRow[]>([]);

  const [policiesTotalPages, setPoliciesTotalPages] = useState<number>(0);
  const [policiesCurrentPage, setPoliciesCurrentPage] = useState<number>(0);

  useEffect(() => {
    setPoliciesHeaders([
      { id: 0, label: <FormCheckboxComponent /> },
      { id: 1, label: <span>Agent Name</span> },
      { id: 2, label: <span>Phone Number</span> },
      { id: 3, label: <span>Email</span> },
      { id: 4, label: <span>Branch</span> },
      { id: 5, label: <span>Means of Identification</span> },
      { id: 6, label: <span>More</span> },
    ]);

    setPoliciesRows([
      {
        id: 1,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Adebayo Salami</span>,
          2: <span>08034518791</span>,
          3: <span>ianbuck@icloud.com</span>,
          4: <span>Port Harcourt</span>,
          5: <span>National ID Card</span>,
          6: (
            <Image
              src={"/assets/admin/more-icon.svg"}
              alt="more-icon"
              width={24}
              height={24}
              className={`cursor-pointer`}
            />
          ),
        },
      },
      {
        id: 2,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Damilare Usman</span>,
          2: <span>08034518791</span>,
          3: <span>ianbuck@icloud.com</span>,
          4: <span>Port Harcourt</span>,
          5: <span>National ID Card</span>,
          6: (
            <Image
              src={"/assets/admin/more-icon.svg"}
              alt="more-icon"
              width={24}
              height={24}
              className={`cursor-pointer`}
            />
          ),
        },
      },
      {
        id: 3,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Jibike Alarape</span>,
          2: <span>08034518791</span>,
          3: <span>ianbuck@icloud.com</span>,
          4: <span>Port Harcourt</span>,
          5: <span>National ID Card</span>,
          6: (
            <Image
              src={"/assets/admin/more-icon.svg"}
              alt="more-icon"
              width={24}
              height={24}
              className={`cursor-pointer`}
            />
          ),
        },
      },
      {
        id: 4,
        data: {
          0: <FormCheckboxComponent />,
          1: <span>Adebanji Bolaji</span>,
          2: <span>08034518791</span>,
          3: <span>ianbuck@icloud.com</span>,
          4: <span>Port Harcourt</span>,
          5: <span>National ID Card</span>,
          6: (
            <Image
              src={"/assets/admin/more-icon.svg"}
              alt="more-icon"
              width={24}
              height={24}
              className={`cursor-pointer`}
            />
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
          <p className={`font-grotesk text-[20px] font-bold`}>No Agent yet</p>
          <p className={`text-[14px] text-[#94A3B8]`}>
            Agents will appear as soon as soon as they register
          </p>
        </div>
      )}
    </div>
  );
};

export default AgentApprovalTable;
