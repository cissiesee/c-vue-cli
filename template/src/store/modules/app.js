// import Cookies from 'js-cookie'
import { common1 } from '@/api/common'

const app = {
  namespaced: true,
  state: {
    demo: {
      key1: ''
    }
  },
  mutations: {
    ACTION_DEMO: (state, payload) => {
      state.demo.key1 = payload
    }
  },
  actions: {
    actionDemo({ commit, state }, payload) {
      // 请使用promise弹出resolve和reject以供ui层进行回调处理
      return new Promise((resolve, reject) => {
        common1(payload).then((res) => {
          // 要判断res.data.code
          commit('ACTION_DEMO', res.data.common)
          resolve(res.data.common)
        }).catch((e) => {
          reject(e)
        })
      })
    }
  }
}

export default app
