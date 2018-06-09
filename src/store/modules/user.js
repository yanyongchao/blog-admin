import { jwt, userinfo } from '@/stored'
import { accessRes } from '@/http'
import { STORE_KEY_JWT, STORE_KEY_USERINFO } from '@/constants'

const state = {
  uid: '',
  username: '',
  company: '',
  age: '',
  city: '',
  email: '',
  wechat: '',
  jwt: ''
}

const mutations = {
  SET_USER_INFO(state, user) {
    Object.assign(state, user)
  },
  LOGOUT(state) {
    for (let key in state) {
      state[key] = ''
    }
  },
  SET_USER_JWT(state, jwt) {
    state.jwt = jwt
  }
}

const actions = {
  initUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      if (userinfo && jwt) {
        try {
          let user = JSON.parse(userinfo)
          commit('SET_USER_INFO', user)
          commit('SET_USER_JWT', jwt)
          accessRes()
            .then(res => {
              if (res.state === 1000) {
                resolve()
              } else {
                commit('LOGOUT')
                localStorage.removeItem(STORE_KEY_JWT)
                localStorage.removeItem(STORE_KEY_USERINFO)
                resolve()
              }
            })
            .catch(() => {
              commit('LOGOUT')
              localStorage.removeItem(STORE_KEY_JWT)
              localStorage.removeItem(STORE_KEY_USERINFO)
              resolve()
            })
        } catch (err) {
          commit('LOGOUT')
          localStorage.removeItem(STORE_KEY_JWT)
          localStorage.removeItem(STORE_KEY_USERINFO)
          resolve()
        }
      } else {
        commit('LOGOUT')
        localStorage.removeItem(STORE_KEY_JWT)
        localStorage.removeItem(STORE_KEY_USERINFO)
        resolve()
      }
    })
  },
  setUserInfo({ commit }, user) {
    let userinfo = {
      uid: user.uid,
      username: user.username,
      company: user.company,
      age: user.age,
      city: user.city,
      email: user.email,
      wechat: user.wechat
    }
    commit('SET_USER_INFO', userinfo)
    commit('SET_USER_JWT', user.jwt)
    localStorage.setItem(STORE_KEY_JWT, user.jwt)
    localStorage.setItem(STORE_KEY_USERINFO, JSON.stringify(userinfo))
  },
  logout({ commit }) {
    commit('LOGOUT')
    localStorage.removeItem(STORE_KEY_JWT)
    localStorage.removeItem(STORE_KEY_USERINFO)
  }
}

const getters = {
  logined(state) {
    return !!state.jwt
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
