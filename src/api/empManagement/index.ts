import service from "@/api/request";
import {AddAndUpdateFormParams, SearchParams} from "@/view/empManagement/type";

/* 获取所有员工 */
export const allEmpAPI = (data: SearchParams) => service({
    url: `/emp/list`,
    method: 'post',
    data: data
})

/* 获取部门列表 */
export const getDeptListAPI = () => service({
    url: `/dept/listDeptSelect`,
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
    method: 'put',
    data: data
})

/* 更新 */
export const updateEmpAPI = (data: AddAndUpdateFormParams) => service({
    url: '/emp/update',
    method: 'put',
    data: data
})

/* 搜索 */
export const searchEmpAPI = (data: SearchParams) => service({
    url: `/emp/search`,
    method: 'post',
    data: data
})
