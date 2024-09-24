import type { AxiosResponse } from 'axios'
import { baseApi } from '@/shared'

export const fetchNews = () => baseApi.get('')

// export namespace NewsAPI {
//   export namespace GET {
//     export namespace FetchNews {
//       export type Response = AxiosResponse<{
//         data: User
//       }>
//     }
//   }
// }
