import axios, { AxiosResponse } from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

interface Pokemon {
  name: string;
  url: string;
}

export async function getPokemons(url: string): Promise<Pokemon[]> {
  try {
    const res: AxiosResponse<{ results: Pokemon[] }> = await axios.get(url);

    return res.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getSpecificPokemon(urls: string[]): Promise<any[]> {
  try {
    const pokemonDataPromises: Promise<AxiosResponse<any>>[] = urls.map(
      async (url) => {
        const response = await axios.get(url);
        return response;
      }
    );
    const responses: AxiosResponse<any>[] = await Promise.all(
      pokemonDataPromises
    );
    return responses.map((res) => res.data);
  } catch (error) {
    console.error("Error fetching specific Pokemon:", error);
    throw error;
  }
}
