import Image from "next/image";
import React from "react";

const ExportButtonComponent = () => {
  return (
    <div
      className={`flex items-center border rounded-md px-[16px] py-[12px] space-x-4 bg-white`}
    >
      <Image
        src={"/assets/admin/export-icon.svg"}
        alt="export-icon"
        width={20}
        height={20}
      />
      <p className={`text-[16px] text-[#64748B] font-medium `}>Export</p>
    </div>
  );
};

export default ExportButtonComponent;
