import { AddAndUpdateFormParams, SearchParams, TableParams } from "@/view/deptManagement/type";
import service from "../request";

/* 查询所有部门 */
export const allDeptAPI = (data: TableParams) => service({
    url: `/dept/list`,
    method: 'post',
    data: data
})
/* 搜索 */
export const searchAPI = (data: SearchParams) => service({
    url: `/dept/search`,
    method: 'post',
    data: data
})
/* 新增 */
export const addDeptAPI = (data: AddAndUpdateFormParams) => service({
    url: `/dept/save`,
    method: 'post',
    data: data
})
/* 删除 */
export const removeDeptAPI = (data: number[]) => service({
    url: `/dept/del`,
    method: 'put',
    data: data
})
/* 修改 */
export const updateDeptAPI = (data: AddAndUpdateFormParams) => service({
    url: `/dept/update`,
    method: 'put',
    data: data
})
