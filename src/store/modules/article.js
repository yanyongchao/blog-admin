import { getCategoryRes, getClassificationRes } from '@/http'

const state = {
  categories: [],
  classifications: []
}

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CLASSIFICATIONS(state, classifications) {
    state.classifications = classifications
  }
}

const actions = {
  getCategories({ commit }) {
    getCategoryRes().then(res => {
      commit('SET_CATEGORIES', res.data.categories)
    })
  },
  getClassifications({ commit }) {
    getClassificationRes().then(res => {
      commit('SET_CLASSIFICATIONS', res.data.classifications)
    })
  }
}

const getters = {
  categories(state) {
    return state.categories
  },
  classifications(state) {
    return state.classifications
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
