'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';

interface FormDialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  onSave: () => void;
  isValid: boolean;
  children: React.ReactNode;
}

export default function FormDialog({
  open,
  title,
  onClose,
  onSave,
  isValid,
  children,
}: FormDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {children}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>İptal</Button>
        <Button
          variant="contained"
          onClick={onSave}
          disabled={!isValid}
        >
          Kaydet
        </Button>
      </DialogActions>
    </Dialog>
  );
} 