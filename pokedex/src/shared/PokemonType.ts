export interface Pokemon {
  url: string;
  id: string;
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number }[];
  location: { latitude: number; longitude: number };
}
