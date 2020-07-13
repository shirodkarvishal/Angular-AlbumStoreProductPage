import { Track } from "./track";

export interface Album {
  releaseDate: string,
  coverImage: string,
  name: string
  tracks: Track[]
}
