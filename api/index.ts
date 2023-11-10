import axios from 'axios'

export const api = {
  localAxios: axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  }),
  async getUsers () {
    return (await this.localAxios.get('users')).data;
  }
}

export default ({}, inject: (name: string, api: any) => void) => {
  inject('api', api)
}