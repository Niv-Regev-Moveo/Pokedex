import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../shared/PokemonType";
export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

interface Pokemons {
  name: string;
  url: string;
}

export async function getPokemons(BASE_URL: string): Promise<Pokemons[]> {
  try {
    const res: AxiosResponse<{ results: Pokemons[] }> = await axios.get(
      BASE_URL
    );
    return res.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getSpecificPokemon(url: string) {
  try {
    const { data }: { data: Pokemon } = await axios.get(url);

    return data;
  } catch (error) {
    console.error("Error fetching specific Pokemon:", error);
    throw error;
  }
}
