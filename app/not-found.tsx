'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', sm: '8rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
          }}
        >
          Sayfa Bulunamadı
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: '600px' }}
        >
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
          }}
        >
          Ana Sayfaya Dön
        </Button>
      </Box>
    </Container>
  );
} 