import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Sayfa Bulunamadı
      </Typography>
      <Button
        component={Link}
        href="/nextnufus"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Ana Sayfaya Dön
      </Button>
    </Box>
  );
} 