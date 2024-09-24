export type NewsData = {
  rss: {
    channel: {
      description: string
      image: NewsImage
      item: NewsItem[]
      language: 'ru' | 'en'
      link: string
      title: string
      ttl: number
    }
  }
}

export type NewsImage = {
  url: string
  link: string
  title: string
}

export type NewsImageRbc = {
  'rbc_news:copyright': string
  'rbc_news:size_nick': string
  'rbc_news:source': string
  'rbc_news:type': string
  'rbc_news:url': string
}

export type RelatedLink = {
  ' rbc_news:thumbnail': {
    copyright: string
    size_nick: string
    source: string
    type: string
    url: string
  }
  'rbc_news:title': string
}

export type NewsItem = {
  author: string
  category: string
  description: string
  enclosure: string
  guid: string
  link: string
  pdalink: string
  pubDate: string
  'rbc_news:anons': string
  'rbc_news:date': string
  'rbc_news:full-text': string
  'rbc_news:image': NewsImageRbc
  'rbc_news:newsModifDate': string
  'rbc_news:news_id': string
  'rbc_news:newsline': string
  'rbc_news:related_links': {
    link: RelatedLink[]
  }
  'rbc_news:tag': string[]
  'rbc_news:time': string
  'rbc_news:type': string
  title: string
}
