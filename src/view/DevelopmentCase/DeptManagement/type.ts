export interface SearchParams {
  pageSize: number
  pageNum: number
  deptName?: null | string
  manager?: string | null
}
export interface TableData {
  deptId: number
  deptName: string
  manager: string
  allNum: number
  remark: string
}
export interface AddAndUpdateFormParams {
  deptId?: number | ''
  deptName: string
  manager: string
  allNum: number | ''
  remark: string
}
