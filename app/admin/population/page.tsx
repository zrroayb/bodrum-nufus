'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';
import { DataItem } from '../../data/nufusData';
import PageLayout from '../../components/admin/PageLayout';
import dynamic from 'next/dynamic';
import FormDialog from '../../components/admin/FormDialog';

const DataTable = dynamic(() => import('../../components/admin/DataTable'), {
  ssr: false
});

export default function PopulationManagement() {
  const [data, setData] = useState<DataItem[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [formData, setFormData] = useState<Partial<DataItem>>({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  // Load data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('nufusData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const handleAdd = () => {
    setSelectedItem(null);
    setFormData({});
    setOpenDialog(true);
  };

  const handleEdit = (item: DataItem) => {
    setSelectedItem(item);
    setFormData(item);
    setOpenDialog(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu veriyi silmek istediğinizden emin misiniz?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem('nufusData', JSON.stringify(updatedData));
      setSnackbar({
        open: true,
        message: 'Veri başarıyla silindi',
        severity: 'success'
      });
    }
  };

  const handleSave = () => {
    try {
      if (!formData.mahalle || !formData.nufus || !formData.hane || !formData.yil) {
        setSnackbar({
          open: true,
          message: 'Lütfen tüm zorunlu alanları doldurun',
          severity: 'error'
        });
        return;
      }

      let updatedData;
      if (selectedItem) {
        // Edit existing item
        updatedData = data.map(item =>
          item.id === selectedItem.id ? { ...item, ...formData } : item
        );
      } else {
        // Add new item
        const newItem: DataItem = {
          id: Math.max(...data.map(item => item.id), 0) + 1,
          foto: `https://picsum.photos/seed/${formData.mahalle}/800/600`,
          bolge: formData.bolge || 'Merkez',
          mahalle: formData.mahalle,
          nufus: Number(formData.nufus),
          hane: Number(formData.hane),
          yil: Number(formData.yil),
          aciklama: formData.aciklama,
        };
        updatedData = [...data, newItem];
      }

      setData(updatedData);
      localStorage.setItem('nufusData', JSON.stringify(updatedData));
      setSnackbar({
        open: true,
        message: `Veri başarıyla ${selectedItem ? 'güncellendi' : 'eklendi'}`,
        severity: 'success'
      });
      setOpenDialog(false);
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Bir hata oluştu',
        severity: 'error'
      });
    }
  };

  const columns = [
    { id: 'mahalle', label: 'Mahalle' },
    { id: 'nufus', label: 'Nüfus' },
    { id: 'hane', label: 'Hane' },
    { id: 'yil', label: 'Yıl' },
    { id: 'bolge', label: 'Bölge' },
  ];

  return (
    <PageLayout title="Nüfus Verileri" onAdd={handleAdd}>
      <DataTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <FormDialog
        open={openDialog}
        title={selectedItem ? 'Veri Düzenle' : 'Yeni Veri Ekle'}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        isValid={!!(formData.mahalle && formData.nufus && formData.hane && formData.yil)}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Mahalle"
            value={formData.mahalle || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, mahalle: e.target.value }))}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nüfus"
            type="number"
            value={formData.nufus || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, nufus: Number(e.target.value) }))}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Hane"
            type="number"
            value={formData.hane || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, hane: Number(e.target.value) }))}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Yıl"
            type="number"
            value={formData.yil || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, yil: Number(e.target.value) }))}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Bölge"
            value={formData.bolge || 'Merkez'}
            onChange={(e) => setFormData(prev => ({ ...prev, bolge: e.target.value }))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Açıklama"
            multiline
            rows={3}
            value={formData.aciklama || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, aciklama: e.target.value }))}
          />
        </Grid>
      </FormDialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageLayout>
  );
} 