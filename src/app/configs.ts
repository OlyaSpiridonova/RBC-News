const mainHost = import.meta.env.MAIN_HOST || 'http://localhost:3000'

export default {
  mainHost,
  baseURL: mainHost + '/api/',
}
