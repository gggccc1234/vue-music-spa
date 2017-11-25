import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {}, // 当前歌手的歌曲列表
  playing: false, // 当前播放状态
  fullScreen: false, // 播放器是否全屏
  playlist: [],  // 歌曲列表
  sequenceList: [],  // 当前播放列表
  mode: playMode.sequence,
  currentIndex: -1,    // 当前播放索引
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state