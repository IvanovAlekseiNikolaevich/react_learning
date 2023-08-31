import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publisher} from "./publisher";

export interface Game {
    id: number
    name: string
    slug: string
    genres: Genre[]
    publishers: Publisher[]
    background_image: string
    parent_platforms: Array<{ platform: Platform }>
    metacritic: number
    rating_top: number
    description_raw: string
}