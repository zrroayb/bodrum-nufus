'use client';

import { createTheme } from '@mui/material/styles';

// Define common gradients and styles that can be reused
const commonStyles = {
  gradients: {
    primary: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
    primaryHover: 'linear-gradient(135deg, #93C5FD, #60A5FA)',
    glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95))',
  },
  shadows: {
    card: '0 2px 8px rgba(59, 130, 246, 0.06)',
    hover: '0 4px 12px rgba(59, 130, 246, 0.08)',
    button: '0 2px 6px rgba(59, 130, 246, 0.1)',
    buttonHover: '0 4px 10px rgba(59, 130, 246, 0.15)',
  },
  borders: {
    light: '1px solid rgba(59, 130, 246, 0.15)',
    lighter: '1px solid rgba(59, 130, 246, 0.08)',
  },
  transitions: {
    hover: 'all 0.25s ease',
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B82F6',
      dark: '#2563EB',
    },
    secondary: {
      main: '#10B981',
      dark: '#059669',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export default theme;

// Export common styles for use in components
export { commonStyles }; 