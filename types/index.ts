export interface CharacterListItem {
  id: number;
  name: string;
  img: string;
}

export interface CharacterDetails extends CharacterListItem {
  age: number;
  race: 'Human' | 'Demon' | string;
  gender: string;
  description: string;
  quote: string;
}