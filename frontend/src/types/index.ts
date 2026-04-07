export interface Manga {
  id: number;
  title: string;
  pages: number;
  cover: string;
  artists: Artist[];
  parodies: Parody[];
  magazines: Magazine[];
  publisher: Publisher;
  tags: Tag[];
}

export interface Artist {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Parody {
  id: number;
  name: string;
}

export interface Magazine {
  id: number;
  name: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

export interface ApiResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
}