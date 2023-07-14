import api from "./Api";

const SignIn = async (email: string, password: string) => {
  return await api.post("/auth/login", { email, password });
};

const authService = { SignIn };

export default authService;
