const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.token;
};

const TokenService = {
  getLocalAccessToken,
};

export default TokenService;
