'use client';

import { Box, Container, Typography, ThemeProvider, CssBaseline } from '@mui/material';
import Image from 'next/image';
import SearchContainer from '../components/SearchContainer';
import Navbar from '../components/Navbar';
import { theme, commonStyles } from '../theme';
import { NUFUS_DATA } from '../data/nufusData';

export default function SearchPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />
        
        {/* Background Image Section */}
        <Box
          sx={{
            position: 'relative',
            height: '300px',
            width: '100%',
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/bodrum-marina.jpg`}
              alt="Bodrum Marina"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(1.05)',
              }}
              priority
              quality={100}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(59, 130, 246, 0.3))',
                zIndex: 1,
              }}
            />
          </Box>

          {/* Title Section */}
          <Container
            maxWidth="xl"
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                maxWidth: '100%',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(10px)',
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  background: commonStyles.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontWeight: 600,
                }}
              >
                Nüfus Verileri Arama
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'text.primary',
                  opacity: 0.9,
                }}
              >
                Bodrum'un mahallelerindeki nüfus verilerini kolayca arayın ve inceleyin.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Search Container */}
        <Container maxWidth="xl" sx={{ pb: 6 }}>
          <SearchContainer
            searchTerm=""
            onSearchChange={() => {}}
            data={NUFUS_DATA}
            searchResults={NUFUS_DATA}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
} 