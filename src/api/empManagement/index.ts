import service from "@/api/request";
import { AddAndUpdateFormParams, SearchParams, TableParams } from "@/view/EmpManagement/type";

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

/* 搜索currentPage, int pageSize, String empName, String position, String deptId */
export const searchEmpAPI = (data: SearchParams) => service({
    url: `/emp/search?currentPage=${data.currentPage}&pageSize=${data.pageSize}&empName=${data.empName}&position=${data.position}&deptId=${data.deptId}`,
    method: 'get'
})
