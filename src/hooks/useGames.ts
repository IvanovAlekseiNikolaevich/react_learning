import { type GameQuery } from '../App'
import { useInfiniteQuery } from '@tanstack/react-query'
import APIClient, { type FetchResponse } from '../services/api-client'

export interface Platform {
  id: number
  name: string
  slug: string
}
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: Array<{ platform: Platform }>
  metacritic: number
  rating_top: number
}

const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async ({ pageParam = 1 }) =>
      await apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam
        }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })

export default useGames
