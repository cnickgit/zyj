import http from '../../utils/http'


// get请求
export function searchWWH(params){
  return http.post('/app/superscanPH/opQuery.jsp',params)
}

export function loginZyj(params){
  return http.post('/app/superscan/op.jsp',params)
}
