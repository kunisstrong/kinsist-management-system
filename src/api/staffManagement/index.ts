import service from "@/api/request";

export const staffManagementList = () => service({
    url: `/test`,
    method: 'get'
})
