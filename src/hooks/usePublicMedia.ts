import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { Media } from '@/types/schema';

export const usePublicMedia = () => {
  return useQuery({
    queryKey: ['media', 'public'],
    queryFn: async (): Promise<Media[]> => {
      const data = await api.get('/media/public');
      return data.data || [];
    },
  });
};
