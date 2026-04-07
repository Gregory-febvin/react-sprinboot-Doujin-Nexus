const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  MANGA: `${API_BASE_URL}/api/manga`,
  IMAGES: `${API_BASE_URL}/api/images`,
  TAGS: `${API_BASE_URL}/api/tags`,
  ARTISTS: `${API_BASE_URL}/api/artists`,
  PARODIES: `${API_BASE_URL}/api/parodies`,
  MAGAZINES: `${API_BASE_URL}/api/magazines`,
  PUBLISHERS: `${API_BASE_URL}/api/publishers`,
};

export const API_CONFIG = {
  TIMEOUT: 5000,
  ITEMS_PER_PAGE: 30,
};