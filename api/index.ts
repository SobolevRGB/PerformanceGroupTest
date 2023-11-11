import axios from 'axios'
import Vue from 'vue'

interface Api {
  localAxios: any;
  getUsers (): Promise<[]>;
  getUser (userId: number): Promise<{}>;
  getUserPosts (userId: number): Promise<[]>;
}

const api: Api = {
  localAxios: axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  }),
  async getUsers () {
    return (await this.localAxios.get('users')).data;
  },
  async getUser (userId: number) {
    return (await this.localAxios.get(`users/${userId}`)).data;
  },
  async getUserPosts (userId: number) {
    return (await this.localAxios.get(`posts?userId=${userId}`)).data;
  }
}


declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}

Vue.prototype.$api = api;


export default ({}, inject: (name: string, api: Api) => void) => {
  inject('api', api)
}
