import React from "react";
import PaginationComponent from "@/common/pagination/index.component";

export interface TableHeader {
  id: number;
  label: React.ReactNode;
}

interface TableRowData {
  [keyName: string]: React.ReactNode;
}

export interface TableRow {
  id: number;
  data: TableRowData;
}

interface TableComponentProps {
  headers: TableHeader[];
  rows: TableRow[];
  paginate?: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const TableComponent: React.FC<TableComponentProps> = ({
  headers,
  rows,
  paginate = true,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className={"space-y-3 bg-white rounded-md"}>
      <div className={"max-w-full overflow-auto"}>
        <table className={"w-full"}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`py-6 px-6 text-gray-dark text-left font-medium bg-gray-light ${
                    index === 0 || index === headers.length - 1
                      ? "rounded-md"
                      : ""
                  } whitespace-nowrap`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={"border-b-2 border-gray-light"}>
                {headers.map((header) => (
                  <td
                    key={header.id}
                    className={`py-6 px-6 text-left font-grotesk font-bold whitespace-nowrap`}
                  >
                    {row.data[header.id?.toString()]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {paginate ? (
        <div className={"flex items-center justify-end"}>
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TableComponent;
