import service from "@/api/request";
import { SearchParams, AddAndUpdateFormParams } from "@/view/systemManagement/userManagement/type";

export const allUserAPI = async (data: SearchParams) =>
  await service({
    url: "/user/list",
    method: "post",
    data
  });

export const searchUserAPI = async (data: SearchParams) =>
  await service({
    url: "/user/list",
    method: "post",
    data
  });

/* 新增 */
export const saveUserAPI = async (data: AddAndUpdateFormParams) =>
  await service({
    url: "/user/save",
    method: "post",
    data
  });

/* 删除 */
export const delUserAPI = async (data: number[]) =>
  await service({
    url: "/user/del",
    method: "put",
    data
  });

/* 更新 */
export const updateUserAPI = async (data: AddAndUpdateFormParams) =>
  await service({
    url: "/user/update",
    method: "put",
    data
  });
