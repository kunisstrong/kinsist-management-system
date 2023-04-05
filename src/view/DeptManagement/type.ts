export type SearchParams = {
    pageSize: number,
    currentPage: number,
    name?: null | string,
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
    currentPage: number,
}

export type AddFormParams = {
    deptId: string,
    deptName: string,
    manager: string,
    allNum: number,
    remark: string
}