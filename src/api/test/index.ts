import service from "../request"

export const testRequest = () => service({
    url: `/test`,
    method: 'get'
})
