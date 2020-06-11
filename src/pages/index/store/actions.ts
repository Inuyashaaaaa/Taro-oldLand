import { GET_LATEST_DATA } from './constants'
import httpRequset from '../../../utils/http'

export const getLatestDataAction = () => {
  return (dispatch) => {
    httpRequset({
      url: '/classic/latest',
      method: 'GET'
    }).then(res => {
      const { data } = res as Taro.request.SuccessCallbackResult<any>
      dispatch({
        type: GET_LATEST_DATA,
        data
      })
    }).catch(err => {
      console.error(err)
    })
  }
}