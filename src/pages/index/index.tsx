import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// components
import Like from '../../components/Like'
import Episode from '../../components/Episode'
import Movie from '../../components/Classic/Movie'

// hooks
import useURLLoader from '../../hooks/useURLLoader'

interface RecieveContent {
  content: string // content: "人生不能像做菜，把所有的料准备好才下锅"
  fav_nums: number // fav_nums: 822
  id: number // id: 1
  image: string // image: "http://bl.7yue.pro/images/movie.8.png"
  index: number // index: 8
  like_status: number // like_status: 1
  pubdate: string // pubdate: "2018-06-22"
  title: string // title: "李安《饮食男女 》"
  type: number // type: 100
}

import './index.scss'

const Index = () => {
  const [ loading, data, error ] = useURLLoader({
    url: '/classic/latest',
    method: 'GET'
  })
  const [ likeCount, setLikeCount ] = useState(0)
  const [ likeStatus, setLikeStatus ] = useState(0)
  const [ image, setImage ] = useState('')
  const [ content, setContent ] = useState('')

  if (loading) {
    Taro.showLoading({
      title: '加载中',
    })
  } else {
    Taro.hideLoading()
    if (error) {
      console.error(error)
      Taro.showToast({
        title: '获取数据失败, 如多次请咨询技术人员',
        icon: 'none',
        duration: 3000
      })
    }
    if (data) {
      const { 
        fav_nums: likeCount,
        like_status: likeStatus,
        image,
        content
      } = data as RecieveContent
      setLikeCount(likeCount)
      setLikeStatus(likeStatus)
      setImage(image)
      setContent(content)
    }
  }

  return (
    <View className='index'>
      <View className="header">
        <Episode episode-class="episode" number={13} isChineseMonth />
        <Like likeStatus={likeStatus === 1} likeCount={likeCount} />
      </View>
      <Movie content={content} imageUrl={image}/>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '城市旧岛'
}

export default Index
