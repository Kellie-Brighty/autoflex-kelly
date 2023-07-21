import SubscriberKycStepsComponent from "@/components/subscriber/kyc-steps/index.component";
import { useEffect, useState } from "react";
import SubscriberDashboardComponent from "@/components/subscriber/dashboard";

export default function SubscriberOverview() {
  const [kycCompleted, setKycCompleted] = useState(false);

  useEffect(() => {
    setKycCompleted(true);
  }, []);

  return kycCompleted ? (
    <SubscriberDashboardComponent />
  ) : (
    <SubscriberKycStepsComponent />
  );
}
