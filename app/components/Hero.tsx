import { Box, Typography, Container, Paper } from '@mui/material';

export default function Hero() {
  return (
    <Paper
      sx={{
        position: 'relative',
        bgcolor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random?technology)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.6)',
        }}
      />
      <Container maxWidth="xl">
        <Box
          sx={{
            position: 'relative',
            py: 8,
          }}
        >
          <Typography component="h1" variant="h2" color="inherit" gutterBottom>
            Excel Data Analysis Made Simple
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Upload, search, and analyze your Excel data with powerful tools and instant insights.
            Transform your spreadsheet data into actionable intelligence.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
} 