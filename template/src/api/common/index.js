import request from '@/utils/request'

export function common1(query) {
  return request({
    url: '/common',
    method: 'get',
    params: query
  })
}
