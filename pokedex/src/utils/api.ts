import axios, { AxiosResponse } from "axios";
import { Pokemon } from "../shared/PokemonType";
export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

interface Pokemons {
  name: string;
  url: string;
}

export const getRandomLocationInTelAviv = (
  radius: number
): { latitude: number; longitude: number } => {
  const telAvivLatitude: number = 32.0853;
  const telAvivLongitude: number = 34.7818;

  const radiusInDegrees: number = radius / 111.32;

  const randomOffsetLatitude: number =
    Math.random() * (radiusInDegrees * 2) - radiusInDegrees;
  const randomOffsetLongitude: number =
    Math.random() * (radiusInDegrees * 2) - radiusInDegrees;

  const newLatitude: number = telAvivLatitude + randomOffsetLatitude;
  const newLongitude: number = telAvivLongitude + randomOffsetLongitude;

  return { latitude: newLatitude, longitude: newLongitude };
};

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

export const setPokemonToLocalStorage = (
  id: string,
  pokemonData: Pokemon[]
) => {
  try {
    const pokemonWithLocations = pokemonData.map((pokemon: Pokemon) => {
      const randomLocation = getRandomLocationInTelAviv(3);
      return {
        ...pokemon,
        location: randomLocation,
      };
    });
    window.localStorage.setItem(id, JSON.stringify(pokemonWithLocations));
    console.log(pokemonWithLocations);
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonFromLocalStorage = (id: string) => {
  try {
    const pokemonFromLocalStorage = window.localStorage.getItem(id);
    return pokemonFromLocalStorage
      ? JSON.parse(pokemonFromLocalStorage)
      : undefined;
  } catch (error) {
    console.log(error);
  }

  return getPokemonFromLocalStorage;
};

export const removePokemonFromLocalStorage = (id: string) => {
  try {
    window.localStorage.removeItem(id);
  } catch (error) {
    console.log(error);
  }
};
