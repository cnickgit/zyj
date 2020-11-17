import http from '../utils/http'


// get请求
export function searchWWH(params){
  return http.post('superscanPH/opQuery.jsp',params)
}
