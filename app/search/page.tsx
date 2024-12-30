'use client';

import { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  ThemeProvider,
  CssBaseline,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../components/Navbar';
import SearchContainer from '../components/SearchContainer';
import ReachUs from '../components/ReachUs';
import { theme } from '../theme';
import { NUFUS_DATA } from '../data/nufusData';
import Image from 'next/image';
import { commonStyles } from '../theme';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchField, setSearchField] = useState('mahalle');
  
  const searchResults = NUFUS_DATA.filter(item => {
    const value = String(item[searchField]).toLowerCase();
    return value.includes(searchTerm.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        position: 'relative',
      }}>
        <Box>
          <Navbar />

          {/* Hero Section */}
          <Box
            sx={{
              position: 'relative',
              height: '40vh',
              width: '100%',
              overflow: 'hidden',
              mb: 6,
            }}
          >
            {/* Background Image Container */}
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
                src="/images/bodrum-marina.jpg"
                alt="Bodrum Marina Aerial View"
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

            {/* Content */}
            <Container 
              maxWidth="xl"
              sx={{
                height: '100%',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                py: { xs: 4, md: 6 },
              }}
            >
              <Box
                sx={{
                  maxWidth: 650,
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(10px)',
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  animation: 'slideIn 1s ease-out',
                  '@keyframes slideIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateY(20px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  },
                }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    background: commonStyles.gradients.primary,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    mb: 2,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Nüfus Verileri Arama
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    mb: 3,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Bodrum'un mahallelerindeki nüfus verilerini kolayca arayın ve inceleyin.
                </Typography>
              </Box>
            </Container>
          </Box>

          {/* Search Section */}
          <Container maxWidth="xl" sx={{ mb: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <SearchContainer
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  data={NUFUS_DATA}
                  searchResults={searchResults}
                />
              </Grid>
            </Grid>
          </Container>

          {/* Stats Section */}
          <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
            <Container maxWidth="xl">
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" color="primary" gutterBottom>
                      {NUFUS_DATA.length}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Toplam Mahalle
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" color="primary" gutterBottom>
                      {NUFUS_DATA.reduce((acc, curr) => acc + curr.nufus, 0).toLocaleString()}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Toplam Nüfus
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" color="primary" gutterBottom>
                      {NUFUS_DATA.reduce((acc, curr) => acc + curr.hane, 0).toLocaleString()}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      Toplam Hane
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Info Section */}
          <Box sx={{ py: 6 }}>
            <Container maxWidth="xl">
              <Typography variant="h4" align="center" gutterBottom color="primary.main" sx={{ mb: 4 }}>
                Veri Kaynağı Hakkında
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" paragraph>
                Bu veriler, Bodrum Belediyesi'nin resmi kayıtlarından alınmıştır. 
                Veriler düzenli olarak güncellenmekte ve mahallelerin güncel nüfus bilgilerini yansıtmaktadır.
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary">
                Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
              </Typography>
            </Container>
          </Box>

          {/* Reach Us Section */}
          <ReachUs />
        </Box>
      </Box>
    </ThemeProvider>
  );
} 