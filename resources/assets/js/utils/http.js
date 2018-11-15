import axios from 'axios'
import router from '../router/index.js'
import store from '../store/index.js'
import {Message} from 'element-ui'

// axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://wxmsg.test/api';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers.Authorization =`Bearer ${store.getters.token}`;
    }
    // console.log('config',config);
    return config
  },
  error => {
    if(error.response){
      Message({
        message: "加载超时",
        type: 'error'
      });
      return Promise.reject(error)
    }
  }
);

/* http response 拦截器 */
axios.interceptors.response.use(
  response => {
    let token;
    if(response.headers.authorization){
      token = response.headers.authorization;
    }
    if(token){
      this.$store.dispatch('refreshToken',token)
    }
    return response
  },
  error => {
    if(error.response){
      if(error.response.data.message == "The token has been blacklisted"){
        this.$store.dispatch('DelToken');
        router.replace("/login");
        Message.error('身份验证已过期，请重新登录');
        return
      }else{
        return Promise.reject(error)
      }
    }
  });

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params = {}){
  return new Promise((resolve,reject) => {
    axios.get(url,{params: params})
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        if (err.response) {
          if(err.response.data.errors){
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
            reject(err)
          }else{
            if(err.response.data['status_code']==500){
              this.$message.error('系统错误');
              reject(err)
            }else{
              this.$message.error(err.response.data.message);
              reject(err)
            }
          }
        }
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data ={}){
  return new Promise((resolve,reject) => {
    axios.post(url,this.$qs.stringify(data))
      .then(response => {
        resolve(response.data);
      },err => {
        if (err.response) {
          if(err.response.data.errors){
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
            reject(err)
          }else{
            if(err.response.data['status_code']==500){
              this.$message.error('系统错误');
              reject(err)
            }else{
              this.$message.error(err.response.data.message);
              reject(err)
            }
          }
        }
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,this.$qs.stringify(data))
      .then(response => {
        resolve(response.data);
      },err => {
        if (err.response) {
          if(err.response.data.errors){
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
            reject(err)
          }else{
            if(err.response.data['status_code']==500){
              this.$message.error('系统错误');
              reject(err)
            }else{
              this.$message.error(err.response.data.message);
              reject(err)
            }
          }
        }
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    // axios.put(url,{data: this.$qs.stringify(data)})
    axios.put(url,this.$qs.stringify(data))
      .then(response => {
        resolve(response.data);
      },err => {
        if (err.response) {
          if(err.response.data.errors){
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
            reject(err)
          }else{
            if(err.response.data['status_code']==500){
              this.$message.error('系统错误');
              reject(err)
            }else{
              this.$message.error(err.response.data.message);
              reject(err)
            }
          }
        }
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.delete(url,{data: this.$qs.stringify(data)})
      .then(response => {
        resolve(response.data);
      },err => {
        if (err.response) {
          if(err.response.data.errors){
            let arr = err.response.data.errors;
            let arr1 = [];
            for (let i in arr) {
              arr1.push(arr[i]);
            }
            this.$message.error(arr1.join(','));
            reject(err)
          }else{
            if(err.response.data['status_code']==500){
              this.$message.error('系统错误');
              reject(err)
            }else{
              this.$message.error(err.response.data.message);
              reject(err)
            }
          }
        }
      })
  })
}



