export type SearchParams = {
    pageSize: number,
    pageNum: number,
    empName: string,
    deptId: number | '',
    position: string,
}
export type TableData = {
    age: number,
    allNum: number,
    dept: Object,
    deptId: number,
    deptName: string,
    empId: number,
    empName: string,
    entryDate: string,
    manager: string,
    position: string,
    remark: string,
    salary: number,
    sex: string
}
export type TableParams = {
    pageSize: number,
    pageNum: number,
}
export type AddAndUpdateFormParams = {
    age: number,
    empId: number | '',
    empName: string,
    sex: string,
    entryDate: string,
    position: string,
    salary: number | '',
    deptId: number | ''
}
export type DeptItem = {
    deptId: number | '',
    deptName: string
}
