import request from '@/utils/request'

export function module1(query) {
  return request({
    url: '/module1',
    method: 'get',
    params: query
  })
}
