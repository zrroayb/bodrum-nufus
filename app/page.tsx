'use client';

import { Box } from '@mui/material';
import Banner from './components/Banner';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Banner />
    </Box>
  );
}