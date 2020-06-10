import Taro, { useState, useEffect } from '@tarojs/taro'
import { BASE_URL, APP_KEY } from '../conf/httpRequest'

type RequestMethod = 'GET' | 'POST'

interface URLProps {
  url: string,
  method: RequestMethod,
  postData?: any,
  deps?: any[]
}

const useURLLoader = (options: URLProps) => {
  const [ data, setData ] = useState<any>(null)
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<any>(null)

  let {
    url,
    method,
    postData,
    deps
  } = options
  if (!deps) {
    deps = []
  }
  useEffect(() => {
    setLoading(true)
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
          setData(res.data)
        else 
          setError(res.data)
        setLoading(false)
      },
      fail: (err) => {
        setError(err)
        setLoading(false)
      }
    })}
  , deps)
  return [ loading, data, error ]
}

export default useURLLoader
