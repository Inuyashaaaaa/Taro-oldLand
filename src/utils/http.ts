import Taro from '@tarojs/taro'
import { BASE_URL, APP_KEY } from '../conf/httpRequest'

type RequestMethod = 'GET' | 'POST'

interface RequestProps {
  url: string,
  method: RequestMethod,
  postData?: any
}

const httpRequset = (options: RequestProps) => {
  const { url, method, postData } = options
  return new Promise((resolve, reject) => {
    Taro.request({
      url: BASE_URL + url,
      method,
      data: postData,
      header: {
        'appKey': APP_KEY
      },
      success: (res) => {
        // 认为 4 开头 5开头均为获取数据错误
        const { statusCode } = res
        if (statusCode.toString().startsWith('2') || statusCode.toString().startsWith('3'))
          resolve(res)
        else 
          reject(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export default httpRequset
