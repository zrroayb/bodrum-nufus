import { Box, Container, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import Image from 'next/image';
import { commonStyles } from '../theme';

export default function Banner() {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
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
            maxWidth: { xs: '100%', sm: 650 },
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(10px)',
            p: { xs: 3, sm: 4, md: 5 },
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
            variant="h1"
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              background: commonStyles.gradients.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 3,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Bodrum Nüfus Verileri
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.primary',
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Yarımadanın demografik verilerine kolayca ulaşın ve analiz edin
          </Typography>
          <Button
            component={Link}
            href="/search"
            variant="contained"
            size="large"
            startIcon={<SearchIcon />}
            sx={{
              background: commonStyles.gradients.primary,
              fontSize: '1.1rem',
              py: 1.5,
              px: 4,
              '&:hover': {
                background: commonStyles.gradients.primaryHover,
              },
            }}
          >
            Verileri İncele
          </Button>
        </Box>
      </Container>
    </Box>
  );
} 