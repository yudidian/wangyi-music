import request from '@/axios/request'

// 获取轮播图
export const getBanner = () => {
  return request.get('/banner?type=2')
}
export const personalized = () => {
  return request.get('/personalized?limit=9')
}
