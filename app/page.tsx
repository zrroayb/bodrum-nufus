'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PeopleIcon from '@mui/icons-material/People';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Navbar from './components/Navbar';
import Link from 'next/link';
import ReachUs from './components/ReachUs';
import Banner from './components/Banner';
import { theme, commonStyles } from './theme';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
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
          <Banner />

          {/* Features Section */}
          <Container
            maxWidth="xl"
            sx={{
              py: { xs: 4, md: 6 },
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: commonStyles.borders.light,
                      transition: commonStyles.transitions.hover,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: commonStyles.shadows.hover,
                      },
                    }}
                  >
                    {feature.icon}
                    <Typography variant="h5" gutterBottom sx={{ mt: 2, color: 'primary.main' }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {feature.description}
                    </Typography>
                    {feature.action}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>

          <ReachUs />
          <ScrollToTop />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Feature cards data
const features = [
  {
    icon: <LocationCityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Mahalle Bilgileri',
    description: 'Bodrum\'un tüm mahallelerine ait güncel nüfus ve demografik veriler.',
    action: null,
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Nüfus İstatistikleri',
    description: 'Mahalle bazlı nüfus dağılımı ve hane sayıları.',
    action: (
      <Button
        component={Link}
        href="/search"
        variant="contained"
        size="large"
        startIcon={<SearchIcon />}
        sx={{
          mt: 'auto',
          alignSelf: 'flex-start',
          background: commonStyles.gradients.primary,
          fontSize: '1.1rem',
          '&:hover': {
            background: commonStyles.gradients.primaryHover,
          },
        }}
      >
        Verileri İncele
      </Button>
    ),
  },
  {
    icon: <QueryStatsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Veri Analizi',
    description: 'Yarımadanın demografik yapısını detaylı olarak analiz edin.',
    action: null,
  },
];