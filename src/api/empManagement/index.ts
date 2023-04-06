import service from "@/api/request";
import { AddAndUpdateFormParams, TableParams } from "@/view/EmpManagement/type";

/* 获取所有员工 */
export const allEmpAPI = (data: TableParams) => service({
    url: `/emp/list/${data.currentPage}/${data.pageSize}`,
    method: 'get'
})

/* 获取部门列表 */
export const getDeptListAPI = () => service({
    url: `/emp/dept/list`,
    method: 'get'
})

/* 新增 */
export const saveEmpAPI = (data: AddAndUpdateFormParams) => service({
    url: `/emp/save`,
    method: 'post',
    data: data
})

/* 删除 */
export const delEmpAPI = (data: number[]) => service({
    url: '/emp/del',
    method: 'post',
    data: data
})

/* 更新 */
export const updateEmpAPI = (data: AddAndUpdateFormParams) => service({
    url: '/emp/update',
    method: 'put',
    data: data
})
