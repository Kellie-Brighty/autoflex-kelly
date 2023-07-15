import Image from "next/image";
import {
  BellIcon,
  ClipboardIcon,
  CreditCardIcon,
  DocumentTextIcon,
  Squares2X2Icon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const links = [
  {
    label: "Overview",
    icon: "/assets/admin/faded-overview.svg",
    selectedIcon: "/assets/admin/overview.svg",
    href: "/admin/overview",
  },
  {
    label: "Polices",
    icon: "/assets/admin/faded-policies.svg",
    selectedIcon: "/assets/admin/policies.svg",
    href: "/admin/policies",
  },
  {
    label: "Agent Approval",
    icon: "/assets/admin/faded-agent-approval.svg",
    selectedIcon: "/assets/admin/agent-approval.svg",
    href: "/admin/agent-approval",
  },
  {
    label: "Revenue Share",
    icon: "/assets/admin/faded-revenue-share.svg",
    selectedIcon: "/assets/admin/revenue-share.svg",
    href: "/admin/revenue-share",
  },
  {
    label: "Management Report",
    icon: "/assets/admin/faded-management-report.svg",
    selectedIcon: "/assets/admin/management-report.svg",
    href: "/admin/management-report",
  },
  {
    label: "Agent Transaction",
    icon: "/assets/admin/faded-agent-transaction.svg",
    selectedIcon: "/assets/admin/agent-transaction.svg",
    href: "/admin/agent-transaction",
  },
  {
    label: "Subscriber Transaction",
    icon: "/assets/admin/faded-subscribers-transaction.svg",
    selectedIcon: "/assets/admin/subscribers-transaction.svg",
    href: "/admin/subscriber-transaction",
  },
  {
    label: "API Response",
    icon: "/assets/admin/faded-api-response.svg",
    selectedIcon: "/assets/admin/api-response.svg",
    href: "/admin/API-response",
  },
  {
    label: "Settings",
    icon: "/assets/admin/faded-settings.svg",
    selectedIcon: "/assets/admin/setting.svg",
    href: "/admin/settings",
  },
  {
    label: "Logout",
    icon: "/assets/admin/faded-logout.svg",
    selectedIcon: "/assets/admin/logout.svg",
    href: "/",
  },
];

const navbarLinks = [
  {
    label: "Overview",
    icon: "/assets/admin/faded-overview.svg",
    selectedIcon: "/assets/admin/overview.svg",
    link: "/admin/overview",
  },
  {
    label: "Polices",
    icon: "/assets/admin/faded-policies.svg",
    selectedIcon: "/assets/admin/policies.svg",
    link: "/admin/policies",
  },
  {
    label: "Agent Approval",
    icon: "/assets/admin/faded-agent-approval.svg",
    selectedIcon: "/assets/admin/agent-approval.svg",
    link: "/admin/agent-approval",
  },
  {
    label: "Revenue Share",
    icon: "/assets/admin/faded-revenue-share.svg",
    selectedIcon: "/assets/admin/revenue-share.svg",
    link: "/admin/revenue-share",
  },
  {
    label: "Management Report",
    icon: "/assets/admin/faded-management-report.svg",
    selectedIcon: "/assets/admin/management-report.svg",
    link: "/admin/management-report",
  },
  {
    label: "Agent Transaction",
    icon: "/assets/admin/faded-agent-transaction.svg",
    selectedIcon: "/assets/admin/agent-transaction.svg",
    link: "/admin/agent-transaction",
  },
  {
    label: "Subscriber Transaction",
    icon: "/assets/admin/faded-subscribers-transaction.svg",
    selectedIcon: "/assets/admin/subscribers-transaction.svg",
    link: "/admin/subscriber-transaction",
  },
  {
    label: "API Response",
    icon: "/assets/admin/faded-api-response.svg",
    selectedIcon: "/assets/admin/api-response.svg",
    link: "/admin/API-response",
  },
  {
    label: "Settings",
    icon: "/assets/admin/faded-settings.svg",
    selectedIcon: "/assets/admin/setting.svg",
    link: "/admin/settings",
  },
  {
    label: "Logout",
    icon: "/assets/admin/faded-logout.svg",
    selectedIcon: "/assets/admin/logout.svg",
    link: "/",
  },
];

interface SubscriberLayoutProps {
  title: string;
  caption: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<SubscriberLayoutProps> = ({
  title,
  caption,
  children,
}) => {
  const router = useRouter();

  return (
    <div className={"w-full h-screen hidden lg:flex bg-background"}>
      <div
        className={
          "w-1/5 max-w-sm h-full space-y-8 bg-white border-r border-gray-main overflow-auto"
        }
      >
        <div className={"py-[27px] px-[32px]"}>
          <Image
            width={180}
            height={32}
            priority
            src={"/logo.png"}
            alt={"AutoFlex"}
          />
        </div>

        <div className={`w-full bg-[#F1F5F9] h-[1px]`} />

        <div className={"mt-[100px] space-y-1"}>
          {links.map((link) => (
            <Link
              href={link.href}
              className={`flex items-center space-x-2 px-[20px] py-[12px]
            w-full cursor-pointer ${
              router.pathname === link.href && "bg-[#2564eb27]"
            } relative`}
              key={link.label}
            >
              {router.pathname === link.href && (
                <div
                  className={`absolute left-0 h-[80%] w-[4px] bg-[#2563EB]`}
                />
              )}
              <Image
                src={
                  router.pathname === link.href ? link.selectedIcon : link.icon
                }
                alt="link-icon"
                width={22}
                height={22}
              />
              <p
                className={`${
                  router.pathname === link.href
                    ? "text-[#2563EB]"
                    : "text-[#64748B]"
                } font-inter text-[14px] ${
                  router.pathname === link.href ? "font-bold" : "font-medium"
                }`}
              >
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className={"flex-1 h-screen flex flex-col"}>
        <div
          className={
            "w-full p-6 flex items-center justify-between bg-white border-b border-gray-main"
          }
        >
          <div>
            <h1 className={"text-2xl font-grotesk font-bold"}>{title}</h1>
            <p className={"text-gray-dark"}>{caption}</p>
          </div>

          <div className={"flex items-center gap-[30px]"}>
            <button>
              <div className={"relative rounded-full"}>
                <Image
                  width={22}
                  height={22}
                  src={"/assets/admin/Search.svg"}
                  alt={"AutoFlex"}
                />
              </div>
            </button>

            <button>
              <div className={"relative rounded-full"}>
                <Image
                  width={22}
                  height={22}
                  src={"/assets/admin/bell.svg"}
                  alt={"AutoFlex"}
                />
              </div>
            </button>

            <button>
              <div className={"relative rounded-full"}>
                <Image
                  width={40}
                  height={40}
                  src={"/assets/admin/avatar.png"}
                  alt={"AutoFlex"}
                />
              </div>
            </button>

            <div className={`bg-[#f2f2f2] py-[8px] px-[12px] rounded-full`}>
              <p className={`font-inter text-[11px] text-[#0024FF] font-bold`}>
                Administrator
              </p>
            </div>

            <Image
              src={"/assets/admin/dropdown.svg"}
              alt="search"
              width={22}
              height={22}
              className={`cursor-pointer`}
            />
          </div>
        </div>

        <div className={"flex-1 h-full p-8 overflow-auto"}>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
