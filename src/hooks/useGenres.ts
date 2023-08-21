import genres from "../data/genres";
import {useQuery} from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


const useGenres = () => {
    return useQuery<Genre[], Error>({
            queryKey: ['genres'],
            queryFn: () => genres,
            staleTime: 100000,
        }
)
}

export default useGenres;