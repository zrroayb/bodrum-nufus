'use client';

import { Box } from '@mui/material';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import ReachUs from './components/ReachUs';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <HeroSection />
      <FeaturesSection />
      <ReachUs />
    </Box>
  );
}