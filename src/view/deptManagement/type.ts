export type SearchParams = {
    pageSize: number,
    pageNum: number,
    deptName?: null | string,
    manager?: string | null
}
export type TableData = {
    deptId: number,
    deptName: string,
    manager: string,
    allNum: number,
    remark: string
}
export type TableParams = {
    pageSize: number,
    pageNum: number,
}
export type AddAndUpdateFormParams = {
    deptId?: number | '',
    deptName: string,
    manager: string,
    allNum: number | '',
    remark: string
}
