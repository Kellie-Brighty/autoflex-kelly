import AuthLayout from "@/layouts/auth/index.layout";
import React from "react";

export type UserTypes = "subscriber" | "agent" | "admin";

interface ChooseUserCardComponentProps {
  type: UserTypes;
}

const userTypesMap: {
  [keyName in UserTypes]: { title: string; caption: string; imageUrl: string };
} = {
  subscriber: {
    title: "I'm a Subscriber",
    caption: "I want to set-up a policy for myself.",
    imageUrl: "/assets/auth/subscriber.png",
  },
  agent: {
    title: "I'm an Agent",
    caption: "I want to access my client's policy.",
    imageUrl: "/assets/auth/agent.png",
  },
  admin: {
    title: "I'm an Admin",
    caption: "I want to manage policies of my subscribers.",
    imageUrl: "/assets/auth/admin.png",
  },
};

const ChooseUserCardComponent: React.FC<ChooseUserCardComponentProps> = ({
  type,
}) => {
  return (
    <div
      className={`w-full flex items-stretch gap-3 text-white ${
        type === "subscriber"
          ? "bg-users-subscriber"
          : type === "agent"
          ? "bg-users-agent"
          : "bg-users-admin"
      } rounded-md cursor-pointer`}
    >
      <div className={"flex-1 p-6"}>
        <h1 className={"text-2xl font-grotesk font-bold"}>
          {userTypesMap[type].title}
        </h1>
        <p className={"text-white"}>{userTypesMap[type].caption}</p>
      </div>

      <img
        src={userTypesMap[type].imageUrl}
        alt={"AutoFlex"}
        className={"w-auto h-full"}
      />
    </div>
  );
};

const ChooseUserTypeComponent = () => {
  return (
    <AuthLayout
      title={"I want to Sign In as"}
      caption={"Choose an option below to get started."}
    >
      <div className={"space-y-3"}>
        <ChooseUserCardComponent type={"subscriber"} />
        <ChooseUserCardComponent type={"agent"} />
        <ChooseUserCardComponent type={"admin"} />
      </div>
    </AuthLayout>
  );
};

export default ChooseUserTypeComponent;
