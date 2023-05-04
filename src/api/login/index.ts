import server from "@/api/request";

export const login = (data: { userName: string; password: string }) =>
  server({
    url: "/user/login",
    method: "post",
    data
  });
