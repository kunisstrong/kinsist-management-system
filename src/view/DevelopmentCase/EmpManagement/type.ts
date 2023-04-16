export interface SearchParams {
  pageSize: number
  pageNum: number
  empName: string
  deptId: number | ''
  position: string
}
export interface TableData {
  age: number
  allNum: number
  dept: Object
  deptId: number
  deptName: string
  empId: number
  empName: string
  entryDate: string
  manager: string
  position: string
  remark: string
  salary: number
  sex: string
}
export interface AddAndUpdateFormParams {
  age: number
  empId: number | ''
  empName: string
  sex: string
  entryDate: string
  position: string
  salary: number | ''
  deptId: number | ''
}
export interface DeptItem {
  deptId: number | ''
  deptName: string
}
