import { useState, useEffect } from 'react';
import axios from 'axios';
import { logger } from '../services/logger';

interface UseFetchOptions {
  enabled?: boolean;
}

export const useFetch = <T,>(url: string, options: UseFetchOptions = {}) => {
  const { enabled = true } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !url) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        logger.info(`Fetching data from ${url}`);
        const response = await axios.get<T>(url);
        setData(response.data);
        setError(null);
        logger.debug(`Successfully fetched data from ${url}`, { size: JSON.stringify(response.data).length });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erreur lors de la requête';
        setError(errorMessage);
        logger.error(`Failed to fetch from ${url}`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, enabled]);

  return { data, loading, error };
};