import service from '@/api/request'
import { type AddAndUpdateFormParams, type SearchParams } from '@/view/Table/EmpManagement/type'

/* 获取所有员工 */
export const allEmpAPI = async (data: SearchParams) => await service({
  url: '/emp/list',
  method: 'post',
  data
})

/* 获取部门列表 */
export const getDeptListAPI = async () => await service({
  url: '/dept/listDeptSelect',
  method: 'get'
})

/* 新增 */
export const saveEmpAPI = async (data: AddAndUpdateFormParams) => await service({
  url: '/emp/save',
  method: 'post',
  data
})

/* 删除 */
export const delEmpAPI = async (data: number[]) => await service({
  url: '/emp/del',
  method: 'put',
  data
})

/* 更新 */
export const updateEmpAPI = async (data: AddAndUpdateFormParams) => await service({
  url: '/emp/update',
  method: 'put',
  data
})

/* 搜索 */
export const searchEmpAPI = async (data: SearchParams) => await service({
  url: '/emp/search',
  method: 'post',
  data
})
