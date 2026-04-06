import axios from 'axios';
import type { Manga } from '../types';

const API_BASE = import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8080';
export const IMAGE_API_BASE = import.meta.env.VITE_IMAGE_API_URL ?? 'http://127.0.0.1:5000';

const api = axios.create({ baseURL: API_BASE });

export async function fetchMangaList(): Promise<Manga[]> {
  const res = await api.get<Manga[]>('/api/manga');
  return res.data;
}

export async function fetchManga(id: string | number): Promise<Manga> {
  const res = await api.get<Manga>(`/api/manga/${id}`);
  return res.data;
}
