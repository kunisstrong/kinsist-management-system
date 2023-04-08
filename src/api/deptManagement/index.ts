import { AddAndUpdateFormParams, SearchParams, TableParams } from "@/view/DeptManagement/type";
import service from "../request";

/* 查询所有部门 */
export const allDeptAPI = (data: TableParams) => service({
    url: `/dept/${data.currentPage}/${data.pageSize}`,
    method: 'get'
})
/* 搜索 */
export const searchAPI = (data: SearchParams) => service({
    url: `/dept/search?currentPage=${data.currentPage}&pageSize=${data.pageSize}&name=${data.name}&manager=${data.manager}`,
    method: 'get'
})
/* 新增 */
export const addDeptAPI = (data: AddAndUpdateFormParams) => service({
    url: `/dept`,
    method: 'post',
    data: data
})
/* 删除 */
export const removeDeptAPI = (data: number[]) => service({
    url: `/dept/del`,
    method: 'post',
    data: data
})
/* 修改 */
export const updateDeptAPI = (data: AddAndUpdateFormParams) => service({
    url: `/dept/update`,
    method: 'put',
    data: data
})
