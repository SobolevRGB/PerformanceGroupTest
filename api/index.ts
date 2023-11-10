export const api = {
  getTest (): string {
    return 'test'
  }
}

export default ({ }, inject: (name: string, api: any) => void) => {
  inject('api', api)
}