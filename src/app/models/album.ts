import { Artist } from "./artist";

export class Album {

  constructor(
    public id?: number | null,
    public title?: string | null,
    public genre?: string | null,
    public artistId?: number | null,
    public artist?: Artist | null,
    public releaseDate?: string | null
  ) { }
}
