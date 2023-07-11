"use client";

import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const notSelectedColor = "#64748B";
const selectedColor = "#2563EB";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navbarLinks = [
    {
      text: "Overview",
      icon: "/admin-assets/faded-overview.svg",
      selectedIcon: "/admin-assets/overview.svg",
      link: "/admin/overview",
    },
    {
      text: "Polices",
      icon: "/admin-assets/faded-policies.svg",
      selectedIcon: "/admin-assets/policies.svg",
      link: "/admin/policies",
    },
    {
      text: "Agent Approval",
      icon: "/admin-assets/faded-agent-approval.svg",
      selectedIcon: "/admin-assets/agent-approval.svg",
      link: "/admin/agent-approval",
    },
    {
      text: "Revenue Share",
      icon: "/admin-assets/faded-revenue-share.svg",
      selectedIcon: "/admin-assets/revenue-share.svg",
      link: "/admin/revenue-share",
    },
    {
      text: "Management Report",
      icon: "/admin-assets/faded-management-report.svg",
      selectedIcon: "/admin-assets/management-report.svg",
      link: "/admin/management-report",
    },
    {
      text: "Agent Transaction",
      icon: "/admin-assets/faded-agent-transaction.svg",
      selectedIcon: "/admin-assets/agent-transaction.svg",
      link: "/admin/agent-transaction",
    },
    {
      text: "Subscriber Transaction",
      icon: "/admin-assets/faded-subscribers-transaction.svg",
      selectedIcon: "/admin-assets/subscribers-transaction.svg",
      link: "/admin/subscriber-transaction",
    },
    {
      text: "API Response",
      icon: "/admin-assets/faded-api-response.svg",
      selectedIcon: "/admin-assets/api-response.svg",
      link: "/admin/API-response",
    },
    {
      text: "Settings",
      icon: "/admin-assets/faded-settings.svg",
      selectedIcon: "/admin-assets/setting.svg",
      link: "/admin/settings",
    },
    {
      text: "Logout",
      icon: "/admin-assets/faded-logout.svg",
      selectedIcon: "/admin-assets/logout.svg",
      link: "/",
    },
  ];

  console.log(pathname);

  return (
    <div className={`bg-white w-[250px] h-screen`}>
      <div className={`py-[27px] px-[32px]`}>
        <Image
          src={"/logo-dark.png"}
          alt={"AutoFlex"}
          width={180}
          height={32}
          priority
        />
      </div>
      <div className={`w-full bg-[#F1F5F9] h-[1px]`} />

      <div className={`mt-[40px]`}>
        {navbarLinks.map((link) => (
          <Link
            href={link.link}
            className={`flex items-center space-x-2 px-[20px] py-[12px]
            w-full cursor-pointer ${
              pathname === link.link && "bg-[#2564eb27]"
            } relative`}
            key={link.text}
          >
            {pathname === link.link && (
              <div className={`absolute left-0 h-[80%] w-[4px] bg-[#2563EB]`} />
            )}
            <Image
              src={pathname === link.link ? link.selectedIcon : link.icon}
              alt="link-icon"
              width={22}
              height={22}
            />
            <p
              className={`${
                pathname === link.link ? "text-[#2563EB]" : "text-[#64748B]"
              } font-inter text-[14px] ${
                pathname === link.link ? "font-bold" : "font-medium"
              }`}
            >
              {link.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
