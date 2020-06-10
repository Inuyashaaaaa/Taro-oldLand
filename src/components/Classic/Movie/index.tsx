import Taro, { FC } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import movieTag from '../images/movie.png'

import './index.scss'

interface MovieProps extends ViewProps{
  imageUrl: string
  content: string
}

const Movie:FC<MovieProps> = (props) => {
  const { imageUrl, content } = props
  return (
    <View className="container">
      <Image src={imageUrl} className="imageShow"/>
      <Image src={movieTag} className="imageTag"/>
      <Text className="content">{content}</Text>
    </View>
  )
}

export default Movie
