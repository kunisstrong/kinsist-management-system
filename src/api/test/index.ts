import service from "../request";

export const testRequest = async () =>
  await service({
    url: "/test",
    method: "get"
  });

export const uploadAPI = async (data: any) =>
  await service({
    url: "/common/upload",
    method: "post",
    data
  });
