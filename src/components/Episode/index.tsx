import Taro, { FC, useEffect, useState } from '@tarojs/taro'
import { ViewProps } from '@tarojs/components/types/View'
import { View, Text } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import classNames from 'classnames'

import StateProps from '../../pages/index/store/type'
import './index.scss'

const Episode: FC<ViewProps> = (props) => {
  const [ year, setYear ] = useState<string | number>('')
  const [ month, setMonth ] = useState<string | number>('')
  const index = useSelector((state: StateProps) => state.index.data.index)
  const klass = classNames('container', 'episode-class')
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', 
  '七月', '八月', '九月', '十月', '十一月', '十二月', ]

  useEffect(() => {
    getMonthAndYear()
  }, [])

  const getMonthAndYear = () => {
    const d = new Date()
    setYear(d.getFullYear())
    setMonth(months[d.getMonth()])  
  }
  return (
    <View {...props} className={klass}>
      <Text className="plain">No.</Text>
      <Text className="count">{index}</Text>
      <View className="dateContainer">
        <Text className="month">{month}</Text>
        <Text className="year">{year}</Text>
      </View>
    </View>
  )
}

// 外部组件
Episode.externalClasses = ['episode-class']

export default Episode
