import { useState, useMemo } from 'react';
import type { PaginationState } from '../types';

interface UsePaginationReturn<T> extends PaginationState {
  paginatedItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstPage: () => void;
  lastPage: () => void;
}

export const usePagination = <T,>(
  items: T[] | null | undefined,
  totalElements: number,
  itemsPerPage: number = 30
): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  // S'assurer que items est toujours un array
  const safeItems = Array.isArray(items) ? items : [];

  const paginationState: PaginationState = useMemo(() => {
    // Calculer totalPages en fonction de totalElements, pas de la longueur locale
    const total = totalElements > 0 ? Math.ceil(totalElements / itemsPerPage) : 1;
    return {
      currentPage,
      totalPages: total,
      itemsPerPage,
    };
  }, [totalElements, itemsPerPage]);

  const paginatedItems = useMemo(() => {
    if (safeItems.length === 0) return [];
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return safeItems.slice(start, end);
  }, [safeItems, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    const maxPage = paginationState.totalPages;
    setCurrentPage(Math.max(1, Math.min(page, maxPage)));
  };

  return {
    paginatedItems,
    ...paginationState,
    goToPage,
    nextPage: () => goToPage(currentPage + 1),
    prevPage: () => goToPage(currentPage - 1),
    firstPage: () => goToPage(1),
    lastPage: () => goToPage(paginationState.totalPages),
  };
};