import Image from "next/image";
import React from "react";

const AdminHeader = () => {
  return (
    <div
      className={`px-[32px] py-[15px] bg-white flex items-center justify-between`}
    >
      <div className={`flex items-center space-x-4`}>
        <div>
          <h3 className={`text-[#0F172A] text-[24px] font-bold`}>
            Welcome Back Admin
          </h3>
          <p className={`text-[#64748B] text-[14px]`}>Monday, 05 Agust 2022</p>
        </div>
        <Image
          src={"/admin-assets/wave.svg"}
          alt="wave"
          width={32}
          height={32}
        />
      </div>

      <div className={`flex items-center space-x-4`}>
        <Image
          src={"/admin-assets/search.svg"}
          alt="search"
          width={22}
          height={22}
          className={`cursor-pointer`}
        />
        <Image
          src={"/admin-assets/bell.svg"}
          alt="search"
          width={22}
          height={22}
          className={`cursor-pointer`}
        />
        <Image
          src={"/admin-assets/avatar.png"}
          alt="search"
          width={40}
          height={40}
          className={`cursor-pointer`}
        />

        <div className={`bg-[#f2f2f2] py-[8px] px-[12px] rounded-full`}>
          <p className={`font-inter text-[11px] text-[#0024FF] font-bold`}>
            Administrator
          </p>
        </div>

        <Image
          src={"/admin-assets/dropdown.svg"}
          alt="search"
          width={22}
          height={22}
          className={`cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default AdminHeader;
