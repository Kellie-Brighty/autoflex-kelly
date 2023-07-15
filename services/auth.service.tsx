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
  hasExcessBuyBack: boolean
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
  });
};

const ResendEmailConfirmation = async (email: any) => {
  return await api.get(`/auth/confirmation/resend/${email}`);
};

const VerifyUser = async (token: any) => {
  return api.get(`/auth/verify-user?token=${token}`);
};

const authService = {
  SignIn,
  GetVehichleEstimate,
  RegisterSubscriber,
  ResendEmailConfirmation,
  VerifyUser,
};

export default authService;

const dinner = {};
