'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Grid,
  Alert,
  Snackbar,
  InputAdornment,
  IconButton,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { BlogPost, getBlogData } from '../../data/blogData';
import PageLayout from '../../components/admin/PageLayout';
import DataTable from '../../components/admin/DataTable';
import FormDialog from '../../components/admin/FormDialog';

interface FormDataType {
  title?: string;
  content?: string;
  summary?: string;
  image?: string;
  author?: string;
}

export default function BlogManagement() {
  const [data, setData] = useState<BlogPost[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState<FormDataType>({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    setData(getBlogData());
  }, []);

  const handleAdd = () => {
    setSelectedItem(null);
    setFormData({});
    setPreviewImage(null);
    setOpenDialog(true);
  };

  const handleEdit = (item: BlogPost) => {
    setSelectedItem(item);
    setFormData(item);
    setPreviewImage(item.image);
    setOpenDialog(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      localStorage.setItem('blogData', JSON.stringify(updatedData));
      setSnackbar({
        open: true,
        message: 'Blog yazısı başarıyla silindi',
        severity: 'success'
      });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setPreviewImage(imageUrl);
        setFormData(prev => ({ ...prev, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setPreviewImage(url);
    setFormData(prev => ({ ...prev, image: url }));
  };

  const handleSave = () => {
    try {
      if (!formData.title || !formData.content || !formData.summary) {
        setSnackbar({
          open: true,
          message: 'Lütfen tüm zorunlu alanları doldurun',
          severity: 'error'
        });
        return;
      }

      const currentDate = new Date().toISOString().split('T')[0];
      let updatedData: BlogPost[];

      if (selectedItem) {
        updatedData = data.map(item => 
          item.id === selectedItem.id 
            ? {
                ...item,
                title: formData.title!,
                content: formData.content!,
                summary: formData.summary!,
                image: formData.image || item.image,
                author: formData.author || item.author,
              }
            : item
        );
      } else {
        const maxId = Math.max(0, ...data.map(item => item.id));
        const newPost: BlogPost = {
          id: maxId + 1,
          title: formData.title!,
          content: formData.content!,
          summary: formData.summary!,
          image: formData.image || `https://picsum.photos/seed/blog${Date.now()}/800/400`,
          date: currentDate,
          author: formData.author || 'Admin'
        };
        updatedData = [...data, newPost];
      }

      setData(updatedData);
      localStorage.setItem('blogData', JSON.stringify(updatedData));
      setOpenDialog(false);
      setSnackbar({
        open: true,
        message: `Blog yazısı başarıyla ${selectedItem ? 'güncellendi' : 'eklendi'}`,
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Bir hata oluştu',
        severity: 'error'
      });
    }
  };

  const columns = [
    { id: 'title', label: 'Başlık' },
    { id: 'summary', label: 'Özet' },
    { 
      id: 'date', 
      label: 'Tarih',
      format: (value: string) => new Date(value).toLocaleDateString('tr-TR')
    },
    { id: 'author', label: 'Yazar' },
  ];

  return (
    <PageLayout title="Blog Yazıları" onAdd={handleAdd}>
      <DataTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <FormDialog
        open={openDialog}
        title={selectedItem ? 'Blog Yazısı Düzenle' : 'Yeni Blog Yazısı'}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        isValid={!!(formData.title && formData.content && formData.summary)}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Başlık"
            value={formData.title || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Yazar"
            value={formData.author || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
            placeholder="Admin"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Özet"
            multiline
            rows={2}
            value={formData.summary || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="İçerik"
            multiline
            rows={6}
            value={formData.content || ''}
            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ mb: 2 }}>
            <input
              type="file"
              accept="image/*"
              id="image-upload"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <TextField
              fullWidth
              label="Fotoğraf"
              placeholder="Fotoğraf URL'si girin veya yükleyin"
              value={formData.image || ''}
              onChange={handleImageUrlChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      component="label"
                      htmlFor="image-upload"
                      size="small"
                    >
                      <ImageIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {previewImage && (
            <Box sx={{ mt: 2, position: 'relative' }}>
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )}
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