'use client';

import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface PageLayoutProps {
  title: string;
  onAdd?: () => void;
  children: React.ReactNode;
}

export default function PageLayout({ title, onAdd, children }: PageLayoutProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">
          {title}
        </Typography>
        {onAdd && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onAdd}
          >
            Yeni Ekle
          </Button>
        )}
      </Box>
      {children}
    </Box>
  );
} 