import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { commonStyles } from '../theme';

export default function SearchBanner() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '40vh', // Shorter height for search page
        width: '100%',
        overflow: 'hidden',
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
            Mahalle bazında detaylı nüfus verilerini görüntüleyin
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 