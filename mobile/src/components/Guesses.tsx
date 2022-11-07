import { Box, useToast } from 'native-base';
import { useState } from 'react';
import { api } from '../services/api';

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState(false);

  const toast = useToast();
  
  async function fetchGames() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${poolId}`)
      setGames(response.data.pool);
      console.log(response.data.pool);
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Não foi possível carregar os jogos',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Box>

    </Box>
  );
}
