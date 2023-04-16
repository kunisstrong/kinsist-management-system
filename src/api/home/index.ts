import service from '../request'

export const testRequest = async () => await service({
  url: '/monitor',
  method: 'get'
})
