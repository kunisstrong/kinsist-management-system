import service from "@/api/request";
import { AddAndUpdateFormParams, SearchParams, TableParams } from "@/view/empManagement/type";

/* 获取所有员工 */
export const allEmpAPI = (data: TableParams) => service({
    url: `/emp/list/${data.pageNum}/${data.pageSize}`,
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

/* 搜索pageNum, int pageSize, String empName, String position, String deptId */
export const searchEmpAPI = (data: SearchParams) => service({
    url: `/emp/search?pageNum=${data.pageNum}&pageSize=${data.pageSize}&empName=${data.empName}&position=${data.position}&deptId=${data.deptId}`,
    method: 'get'
})
