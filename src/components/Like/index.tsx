import Taro, { FC } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import { ViewProps } from '@tarojs/components/types/View'

import LikeImg from './images/like.png'
import UnLikeImg from './images/unLike.png'
import StateProps from '../../pages/index/store/type'

import './index.scss'

const Like:FC<ViewProps> = (props) => {
  const likeStatus = useSelector((state: StateProps) => state.index.data.like_status)
  const likeCount = useSelector((state: StateProps) => state.index.data.fav_nums)
  const cutCount = (count: number): any => {
    if (count > 1000000) {
      return (count / 1000000).toFixed(1) + 'M'
    }
    if (count > 1000) {
      return (count / 1000).toFixed(1) + 'K' 
    }
    return count
  }
  return (
    <View {...props} className="container">
      <Image src={likeStatus ? LikeImg : UnLikeImg} className="image"/>
      <Text className="text">{cutCount(likeCount)}</Text>
    </View>
  )
}

export default Like
