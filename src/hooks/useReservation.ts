import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { Reservation } from '@/types/schema';

export const useCreateReservation = () => {
  return useMutation({
    mutationFn: async (reservation: Reservation) => {
      return api.post('/reservations', reservation);
    },
  });
};
