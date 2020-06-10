import Taro, { FC, useEffect, useState } from '@tarojs/taro'
import { ViewProps } from '@tarojs/components/types/View'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'

import './index.scss'

interface EpisodeProps extends ViewProps {
  number: number
  year?: number
  month?: number
  isChineseMonth?: boolean
}

const Episode: FC<EpisodeProps> = (props) => {
  const { year, month, number, isChineseMonth } = props
  const [ episodeYear, setYear ] = useState<string | number | undefined>(year)
  const [ episodeMonth, setMonth ] = useState<string | number | undefined>(month)
  const klass = classNames('container', 'episode-class')
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', 
  '七月', '八月', '九月', '十月', '十一月', '十二月', ]
  const formatDate = (number: number):string => {
    if (number < 10) {
      return '0' + number
    }
    return number.toString()
  }
  useEffect(() => {
    const d = new Date()
    if (!episodeYear) {
      setYear(d.getFullYear())
    }
    if (!episodeMonth) {
      if (isChineseMonth) {
        setMonth(months[d.getMonth()])
      } else {
        setMonth(formatDate(d.getMonth() + 1))
      }
    }
  }, [year, month])
  return (
    <View className={klass}>
      <Text className="plain">No.</Text>
      <Text className="count">{number}</Text>
      <View className="dateContainer">
        <Text className="month">{episodeMonth}</Text>
        <Text className="year">{episodeYear}</Text>
      </View>
    </View>
  )
}

// 外部组件
Episode.externalClasses = ['episode-class']

export default Episode
