import { useState } from "react";
import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}
const useGenres = () => ({ data: genres, isLoading: false, error: null })
export default useGenres;
