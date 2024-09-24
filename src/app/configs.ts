const mainHost = import.meta.env.MAIN_HOST || 'http://localhost:5173/rss-feed'

export default {
  mainHost,
  baseURL: mainHost,
}
