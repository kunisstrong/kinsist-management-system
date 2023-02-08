import service from "../request";

export const testRequest = () => service({
    url: `/monitor`,
    method: 'get'
})
