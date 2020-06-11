import { GET_LATEST_DATA } from './constants'


interface StateProps {
  data: RecieveContent
}

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
  url?: string // 歌曲路径
}

const INITIAL_STATE: StateProps = {
  data: {
    content: '',
    fav_nums: 0,
    id: 0,
    image: '',
    index: 0,
    like_status: 0,
    pubdate: '',
    title: '',
    type: 0,
    url: ''
  }
}

const handleGetLatestData = (state, data) => {
  const newState = state
  newState.data = data
  return newState
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LATEST_DATA:
      return handleGetLatestData(state, action.data)
    default: 
      return state
  }
}