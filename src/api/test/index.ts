import service from "../request";

export const testRequest = async () =>
  await service({
    url: "/test",
    method: "get"
  });
