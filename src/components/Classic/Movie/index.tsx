import Taro, { FC } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import { useSelector } from '@tarojs/redux'

import StateProps from '../../../pages/index/store/type'
import movieTag from '../images/movie.png'

import './index.scss'

const Movie:FC<ViewProps> = (props) => {
  const imageUrl = useSelector((state: StateProps) => state.index.data.image)
  const content = useSelector((state: StateProps) => state.index.data.content)
  return (
    <View {...props} className="container">
      <Image src={imageUrl} className="imageShow"/>
      <Image src={movieTag} className="imageTag"/>
      <Text className="content">{content}</Text>
    </View>
  )
}

export default Movie
