import Taro, { FC } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import { useSelector } from '@tarojs/redux'

import LeftDisabledImage from './images/left-disabled.png'
import LeftImage from './images/left.png'
import RightDisabledImage from './images/right-disabled.png'
import RightImage from './images/right.png'
import StateProps from '../../pages/index/store/type'

import './index.scss'

const Navigator:FC<ViewProps> = (props) => {
  const title = useSelector((state: StateProps) => state.index.data.title)
  return (
    <View {...props} className="container">
      <Image className="icon" src={true ? LeftDisabledImage : LeftImage}/>
      <Text>{title}</Text>
      <Image className="icon" src={true ? RightDisabledImage : RightImage}/>
    </View>
  )
}

export default Navigator
