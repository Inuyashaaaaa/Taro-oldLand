import Taro, { useEffect } from '@tarojs/taro'
// import { useDispatch } from '@tarojs/redux'
import { View } from '@tarojs/components'
// import { getLatestDataAction } from './store/actions'

// components
// import Like from '../../components/Like'
// import Episode from '../../components/Episode'
// import Movie from '../../components/Classic/Movie'
// import Navi from '../../components/Navigator'

import './index.scss'

const Index = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getLatestDataAction())
  // }, [])
  return (
    <View className='container'>
      123
      {/* <View className="header">
        <Episode episode-class="episode"/>
        <Like/>
      </View>
      <Movie/>
      <View className="footer">
        <Navi />
      </View> */}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '城市旧岛'
}

export default Index
