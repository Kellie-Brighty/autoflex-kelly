import api from "./Api";

const SignIn = async (email: string, password: string) => {
  return await api.post("/auth/login", { email, password });
};

const GetVehichleEstimate = async (value: number) => {
  return await api.get(`/vehicle/getEstimate/${value}`);
};

const RegisterSubscriber = async (
  vehicleName: string,
  vehicleYear: string,
  vehicleWorth: string,
  phoneNumber: string,
  email: string,
  amount: string,
  plan: string,
  hasExcessBuyBack: boolean,
  policyName: string
) => {
  return await api.post("/subscriber/register", {
    vehicleName,
    vehicleYear,
    vehicleWorth,
    phoneNumber,
    email,
    amount,
    plan,
    hasExcessBuyBack,
    policyName,
  });
};

const authService = { SignIn, GetVehichleEstimate, RegisterSubscriber };

export default authService;

const dinner = {};
