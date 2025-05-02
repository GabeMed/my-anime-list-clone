import { Person } from "./Person";

export interface CharacterVoiceRole {
  character: {
    mal_id: number;
    name: string;
    images: {
      webp: {
        image_url: string;
      };
    };
  };
  role: string;
  voice_actors: [
    {
      person: Person;
      language: string;
    }
  ];
}
