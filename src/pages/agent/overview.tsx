import React, { useEffect, useState } from "react";
import AgentKycStepsComponent from "@/components/agent/kyc-steps/index.component";
import AgentDashboardComponent from "@/components/agent/dashboard";

export default function AgentOverview() {
  const [kycCompleted, setKycCompleted] = useState(false);

  useEffect(() => {
    setKycCompleted(true);
  }, []);

  return kycCompleted ? (
    <AgentDashboardComponent />
  ) : (
    <AgentKycStepsComponent />
  );
}
