import { CatImage } from "../cats/types";

export interface FavouriteCat extends CatImage {
  image: {
    url: string;
    id: string;
  };
  image_id: string;
}
