import Vue from 'vue'
import { STORE_KEY_JWT } from '@/constants'
import axios from 'axios'
import router from '../router'
import store from '../store'

const Axios = axios.create({
  baseURL: '/api', // 设置请求baseURL
  timeout: 30000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 添加请求拦截器
Axios.interceptors.request.use(
  function(config) {
    let t = localStorage.getItem(STORE_KEY_JWT)
    if (t) {
      config.headers.jwt = t
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          router.push('/401')
          break
        case 500:
          router.push('/500')
          break
        case 404:
          router.push('/404')
          break
        default:
      }
    }
    return Promise.reject(error)
  }
)

// get one
export const getOne = url => {
  return id => Axios.get(`${url}/${id}`)
}

// get请求
export const get = url => {
  return body => Axios.get(url, { params: body })
}

// post请求
export const post = url => {
  return body => Axios.post(url, body)
}

// put请求
export const put = url => {
  return (id, body) => Axios.put(`${url}/${id}`, body)
}

// delete请求
export const del = url => {
  return id => Axios.delete(`${url}/${id}`)
}

// put请求

/**
 * 接口
 */
export const loginRes = post('/user/signin')
export const accessRes = get('/user/access')

// 标签
export const getCategoryRes = get('/category')
export const postCategoryRes = post('/category')
export const deleteCategoryRes = del('/category')
export const putCategoryRes = put('/category')

// 分类
export const getClassificationRes = get('/classification')
export const postClassificationRes = post('/classification')
export const deleteClassificationRes = del('/classification')
export const putClassificationRes = put('/classification')

// 文章
export const getArticlesRes = get('/article')
export const postArticleRes = post('/article')
export const putArticleRes = put('/article')
export const getArticleRes = getOne('/article')
export const deleteArticleRes = del('/article')
