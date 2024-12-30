'use client';

import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import ReachUs from './components/ReachUs';
import ScrollToTop from './components/ScrollToTop';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flex: 1 }}>
              {children}
            </Box>
            <ReachUs />
            <ScrollToTop />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
