import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { DataItem } from '../data/nufusData';

interface DetailDialogProps {
  open: boolean;
  onClose: () => void;
  data: DataItem;
}

export default function DetailDialog({ open, onClose, data }: DetailDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{data.mahalle} Mahallesi</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: 300,
                width: '100%',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            >
              <Image
                src={data.foto}
                alt={data.mahalle}
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.50' }}>
              <Typography variant="body1" paragraph>
                <strong>Nüfus:</strong> {data.nufus.toLocaleString()}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Hane Sayısı:</strong> {data.hane.toLocaleString()}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Yıl:</strong> {data.yil}
              </Typography>
              {data.aciklama && (
                <Typography variant="body1" color="text.secondary">
                  {data.aciklama}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
} 