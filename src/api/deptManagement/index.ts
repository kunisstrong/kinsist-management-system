import { type AddAndUpdateFormParams, type SearchParams } from "@/view/systemManagement/DeptManagement/type";
import service from "../request";

/* 查询所有部门 */
export const allDeptAPI = async (data: SearchParams) =>
  await service({
    url: "/dept/list",
    method: "post",
    data
  });
/* 搜索 */
export const searchAPI = async (data: SearchParams) =>
  await service({
    url: "/dept/search",
    method: "post",
    data
  });
/* 新增 */
export const addDeptAPI = async (data: AddAndUpdateFormParams) =>
  await service({
    url: "/dept/save",
    method: "post",
    data
  });
/* 删除 */
export const removeDeptAPI = async (data: number[]) =>
  await service({
    url: "/dept/del",
    method: "put",
    data
  });
/* 修改 */
export const updateDeptAPI = async (data: AddAndUpdateFormParams) =>
  await service({
    url: "/dept/update",
    method: "put",
    data
  });
