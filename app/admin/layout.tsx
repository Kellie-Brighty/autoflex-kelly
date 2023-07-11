import AdminHeader from "@/components/admin/AdminHeader";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body
        suppressHydrationWarning={true}
        className={`flex  w-screen h-screen overflow-y-hidden max-w-[1400px] m-auto`}
      >
        <div className="w-[250px] hidden md:flex">
          <Sidebar />
        </div>
        <div className="w-full">
          <AdminHeader />
          <div className="bg-[#F8FAFC] w-full h-full overflow-y-scroll scrollbar-hide">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

const layout = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};
