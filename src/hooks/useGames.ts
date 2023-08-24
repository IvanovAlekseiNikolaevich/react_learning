import { type GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import APIClient, { type FetchResponse } from '../services/api-client'
import { type Platform } from '../components/PlatformSelector'

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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: async () =>
      await apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        }
      })
  })

export default useGames
