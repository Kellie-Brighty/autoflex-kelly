import Image from "next/image";
import React from "react";
import activePolices from "../../../../public/admin-assets/active-policies.png";
import openArrow from "../../../../public/admin-assets/arrows-diagonal.svg";
import greenUp from "../../../../public/admin-assets/green-up.png";
import awaitingRenewals from "../../../../public/admin-assets/active-renewals.png";
import deactivatedPolicies from "../../../../public/admin-assets/deactivated-policies.png";
import expiredPolicies from "../../../../public/admin-assets/expired-policies.png";
import redDown from "../../../../public/admin-assets/red-down.png";

const DashboardStatistics = () => {
  return (
    <div>
      <p className={`text-[18px] font-medium`}>Dashboard Statistics</p>

      <div
        className={`mt-[15px] items-center flex bg-white py-[20px] px-[24px] justify-between`}
      >
        <div className={``}>
          <div className={`flex w-[200px] justify-between`}>
            <Image src={activePolices} alt="active-policies" />
            <Image
              src={openArrow}
              alt="active-policies"
              width={16}
              height={16}
            />
          </div>
          <p
            className={`mt-[16px] text-[#64748B] text-[14px]
            font-bold font-inter`}
          >
            Active Policies
          </p>
          <div className={`flex items-center space-x-5 mt-[16px]`}>
            <p className={`font-grotesque font-extrabold text-[24px]`}>
              40,555
            </p>
            <div
              className={`flex items-center bg-[#24d16327] p-[2px] rounded-md px-[5px] mt-[3px]`}
            >
              <Image src={greenUp} alt="green-up" />
              <p className={`text-[12px] font-medium text-[#24D164]`}>59%</p>
            </div>
          </div>
        </div>
        <div className={`h-[72px] w-[1px] bg-[#E2E8F0]`} />
        <div className={``}>
          <div className={`flex w-[200px] justify-between`}>
            <Image src={awaitingRenewals} alt="active-policies" />
            <Image
              src={openArrow}
              alt="active-policies"
              width={16}
              height={16}
            />
          </div>
          <p
            className={`mt-[16px] text-[#64748B] text-[14px]
            font-bold font-inter`}
          >
            Awaiting Renewals
          </p>
          <div className={`flex items-center space-x-5 mt-[16px]`}>
            <p className={`font-grotesque font-extrabold text-[24px]`}>
              40,555
            </p>
            <div
              className={`flex items-center bg-[#ed1c2336] p-[2px] rounded-md px-[5px] mt-[3px]`}
            >
              <Image src={redDown} alt="green-up" />
              <p className={`text-[12px] font-medium text-[#ED1C24]`}>59%</p>
            </div>
          </div>
        </div>
        <div className={`h-[72px] w-[1px] bg-[#E2E8F0]`} />
        <div className={``}>
          <div className={`flex w-[200px] justify-between`}>
            <Image src={deactivatedPolicies} alt="active-policies" />
            <Image
              src={openArrow}
              alt="active-policies"
              width={16}
              height={16}
            />
          </div>
          <p
            className={`mt-[16px] text-[#64748B] text-[14px]
            font-bold font-inter`}
          >
            Deactivated Policies
          </p>
          <div className={`flex items-center space-x-5 mt-[16px]`}>
            <p className={`font-grotesque font-extrabold text-[24px]`}>
              40,555
            </p>
            <div
              className={`flex items-center bg-[#ed1c2330] p-[2px] rounded-md px-[5px] mt-[3px]`}
            >
              <Image src={redDown} alt="green-up" />
              <p className={`text-[12px] font-medium text-[#ED1C24]`}>59%</p>
            </div>
          </div>
        </div>
        <div className={`h-[72px] w-[1px] bg-[#E2E8F0]`} />
        <div className={``}>
          <div className={`flex w-[200px] justify-between`}>
            <Image src={expiredPolicies} alt="active-policies" />
            <Image
              src={openArrow}
              alt="active-policies"
              width={16}
              height={16}
            />
          </div>
          <p
            className={`mt-[16px] text-[#64748B] text-[14px]
            font-bold font-inter`}
          >
            Expired Policies
          </p>
          <div className={`flex items-center space-x-5 mt-[16px]`}>
            <p className={`font-grotesque font-extrabold text-[24px]`}>
              40,555
            </p>
            <div
              className={`flex items-center bg-[#ed1c232b] p-[2px] rounded-md px-[5px] mt-[3px]`}
            >
              <Image src={redDown} alt="green-up" />
              <p className={`text-[12px] font-medium text-[#ED1C24]`}>59%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatistics;
