import AuthLayout from "@/layouts/auth/index.layout";
import Link from "next/link";
import React from "react";

export type UserTypes = "subscriber" | "agent" | "admin";

interface ChooseUserCardComponentProps {
  type: UserTypes;
}

const userTypesMap: {
  [keyName in UserTypes]: {
    title: string;
    caption: string;
    imageUrl: string;
    state: string;
  };
} = {
  subscriber: {
    title: "I'm a Subscriber",
    caption: "I want to set-up a policy for myself.",
    imageUrl: "/assets/auth/subscriber.png",
    state: "Subscriber",
  },
  agent: {
    title: "I'm an Agent",
    caption: "I want to access my client's policy.",
    imageUrl: "/assets/auth/agent.png",
    state: "Agent",
  },
  admin: {
    title: "I'm an Admin",
    caption: "I want to manage policies of my subscribers.",
    imageUrl: "/assets/auth/admin.png",
    state: "Admin",
  },
};

const ChooseUserCardComponent: React.FC<ChooseUserCardComponentProps> = ({
  type,
}) => {
  const saveUserState = (state: string) => {
    localStorage.setItem("UserState", state);
  };

  return (
    <Link
      href="/auth/sign-in"
      className={`flex flex-col`}
      onClick={() => saveUserState(userTypesMap[type].state)}
    >
      <div
        className={`w-full flex items-stretch gap-3 space-y-5 text-white ${
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
    </Link>
  );
};

const ChooseUserTypeComponent = () => {
  return (
    <AuthLayout
      title={"I want to Sign In as"}
      caption={"Choose an option below to get started."}
    >
      <div className={"space-y-5"}>
        <ChooseUserCardComponent type={"subscriber"} />
        <ChooseUserCardComponent type={"agent"} />
        <ChooseUserCardComponent type={"admin"} />
      </div>
    </AuthLayout>
  );
};

export default ChooseUserTypeComponent;
