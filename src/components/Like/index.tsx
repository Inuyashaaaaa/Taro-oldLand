import Taro, { FC } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import LikeImg from './images/like.png'
import UnLikeImg from './images/unLike.png'

import './index.scss'

interface LikeProps {
  likeCount: number
  likeStatus: boolean
}

const Like:FC<LikeProps> = (props) => {
  const { likeCount, likeStatus } = props
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
    <View className="container">
      <Image src={likeStatus ? LikeImg : UnLikeImg} className="image"/>
      <Text className="text">{cutCount(likeCount)}</Text>
    </View>
  )
}

export default Like
