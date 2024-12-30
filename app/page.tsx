'use client';

import { Box } from '@mui/material';
import Banner from './components/Banner';
import FeaturesSection from './components/FeaturesSection';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Banner />
      <FeaturesSection />
    </Box>
  );
}