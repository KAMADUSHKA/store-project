import api from "./interceptor";

export const handleLogin = (formData) => {
  let postData = {
    email: formData.username,
    password: formData.password,
  };
  return api.post("/", postData);
};
