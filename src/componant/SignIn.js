import api from "./interceptor";

export const handleLogin = (formData) => {
  let postData = {
    userName: formData.username,
    password: formData.password,
  };
  return api.post("/api/v1/sso/login", postData);
};
