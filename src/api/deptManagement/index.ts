import { AddFormParams, SearchParams, TableParams } from "@/view/DeptManagement/type";
import service from "../request";

/* 查询所有部门 */
export const allDeptAPI = (data: TableParams) => service({
    url: `/dept/${data.currentPage}/${data.pageSize}`,
    method: 'get'
})
/* 搜索 */
export const searchAPI = (data: SearchParams) => service({
    url: `/dept/${data.currentPage}/${data.pageSize}/${data.name}/${data.manager}`,
    method: 'get'
})
/* 新增 */
export const addDeptAPI = (data: AddFormParams) => service({
    url: `/dept`,
    method: 'post',
    data: data
})
