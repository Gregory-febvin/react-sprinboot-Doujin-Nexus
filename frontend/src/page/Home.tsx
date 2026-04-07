import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Manga } from '../types';
import { ItemCard } from '../component/shared/ItemCard';
import { Pagination } from '../component/shared/Pagination';
import { LoadingSpinner, ErrorMessage } from '../component/shared/LoadingSpinner';
import { API_ENDPOINTS, API_CONFIG } from '../config/api';
import { logger } from '../services/logger';

interface HomeProps {
  items?: Manga[];
}

export default function Home({ items: propItems }: HomeProps) {
  const [items, setItems] = useState<Manga[]>(propItems || []);
  const [loading, setLoading] = useState(!propItems);
  const [error, setError] = useState<string | null>(null);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    logger.info('Home component mounted');
    
    if (propItems && propItems.length > 0) {
      logger.info('Using items from props', { count: propItems.length });
      setItems(propItems);
      setTotalElements(propItems.length);
      setLoading(false);
      setCurrentPage(1);
    } else {
      fetchMangas(currentPage);
    }
  }, [currentPage, propItems]);

  const fetchMangas = async (pageNumber: number) => {
    try {
      setLoading(true);
      logger.info(`Fetching mangas - page ${pageNumber}`);
      
      const response = await axios.get(
        `${API_ENDPOINTS.MANGA}?page=${pageNumber - 1}&size=${API_CONFIG.ITEMS_PER_PAGE}`
      );
      
      const mangaList = response.data.content || (Array.isArray(response.data) ? response.data : []);
      const total = response.data.totalElements || mangaList.length;
      
      logger.info(`Successfully fetched ${mangaList.length} mangas`, { total, page: pageNumber });
      setItems(mangaList);
      setTotalElements(total);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du chargement';
      setError(errorMessage);
      logger.error(`Failed to fetch mangas on page ${pageNumber}`, err);
      setItems([]);
      setTotalElements(0);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalElements / API_CONFIG.ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    logger.debug('Navigating to page', { page });
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (items.length === 0) return <ErrorMessage message="Aucun manga trouvé" />;

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-5 w-4/5 mx-auto mt-[1%] mb-10">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          onFirst={() => goToPage(1)}
          onLast={() => goToPage(totalPages)}
        />
      )}
    </div>
  );
}