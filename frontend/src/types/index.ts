export interface NamedEntity {
  name: string;
}

export interface Manga {
  id: number;
  title: string;
  cover: string;
  pages: number;
  artists: NamedEntity[];
  magazines: NamedEntity[];
  parodies: NamedEntity[];
  publisher: NamedEntity | null;
  tags: NamedEntity[];
}
