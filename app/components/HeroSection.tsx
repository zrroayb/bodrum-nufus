'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/images/bodrum-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
          zIndex: -1,
        },
      }}
    >
      {/* Content */}
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 'md',
            color: 'white',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Bodrum Nüfus Bilgileri
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              fontWeight: 400,
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              maxWidth: '600px',
            }}
          >
            Bodrum'un mahalle mahalle nüfus verilerine kolayca erişin
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/search"
            sx={{
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Nüfus Verilerini İncele
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 