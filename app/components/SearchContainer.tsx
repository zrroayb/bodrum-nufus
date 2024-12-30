import { useState } from 'react';
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { DataItem } from '../data/nufusData';

interface SearchContainerProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  data: DataItem[];
  searchResults: DataItem[];
}

export default function SearchContainer({
  searchTerm,
  onSearchChange,
  data,
  searchResults,
}: SearchContainerProps) {
  const [selectedRow, setSelectedRow] = useState<DataItem | null>(null);
  // Get unique values for each column
  const uniqueMahalleler = [...new Set(data.map(item => item.mahalle))].sort();
  const uniqueNufusRanges = [
    '0-1000',
    '1000-5000',
    '5000-10000',
    '10000-20000',
    '20000+'
  ];
  const uniqueHaneRanges = [
    '0-500',
    '500-2000',
    '2000-5000',
    '5000-10000',
    '10000+'
  ];
  const uniqueBolgeler = [...new Set(data.map(item => item.bolge))].sort();

  const [filters, setFilters] = useState({
    mahalle: '',
    nufus: '',
    hane: '',
    bolge: '',
  });

  const [textSearch, setTextSearch] = useState('');

  const handleFilterChange = (field: string) => (event: any) => {
    setFilters(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(event.target.value);
  };

  const isInRange = (value: number, range: string) => {
    if (!range) return true;
    const [min, max] = range.split('-').map(Number);
    if (range.includes('+')) {
      return value >= Number(range.replace('+', ''));
    }
    return value >= min && value < max;
  };

  const filteredResults = searchResults.filter(item => {
    const textMatch = textSearch.toLowerCase() === '' || 
      item.mahalle.toLowerCase().includes(textSearch.toLowerCase()) ||
      item.bolge.toLowerCase().includes(textSearch.toLowerCase());

    return textMatch && (
      (!filters.mahalle || item.mahalle === filters.mahalle) &&
      (!filters.nufus || isInRange(item.nufus, filters.nufus)) &&
      (!filters.hane || isInRange(item.hane, filters.hane)) &&
      (!filters.bolge || item.bolge === filters.bolge)
    );
  });

  const handleRowClick = (row: DataItem) => {
    setSelectedRow(row);
  };

  const handleCloseDialog = () => {
    setSelectedRow(null);
  };

  return (
    <Box>
      <Paper elevation={0} sx={{ 
        p: { xs: 2, sm: 3 },
        mb: 4 
      }}>
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {/* Text Search Field */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
              Arama
            </Typography>
            <TextField
              fullWidth
              placeholder="Mahalle veya bölge adı ile arama yapın..."
              value={textSearch}
              onChange={handleTextSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Filter Fields */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
              Mahalle
            </Typography>
            <FormControl fullWidth>
              <Select
                value={filters.mahalle}
                onChange={handleFilterChange('mahalle')}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    fontSize: '0.9rem',
                  }
                }}
              >
                <MenuItem value="">Tüm Mahalleler</MenuItem>
                {uniqueMahalleler.map(mahalle => (
                  <MenuItem key={mahalle} value={mahalle}>
                    {mahalle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
              Nüfus Aralığı
            </Typography>
            <FormControl fullWidth>
              <Select
                value={filters.nufus}
                onChange={handleFilterChange('nufus')}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    fontSize: '0.9rem',
                  }
                }}
              >
                <MenuItem value="">Tüm Nüfus Aralıkları</MenuItem>
                {uniqueNufusRanges.map(range => (
                  <MenuItem key={range} value={range}>
                    {range.replace('-', ' - ')} kişi
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
              Hane Aralığı
            </Typography>
            <FormControl fullWidth>
              <Select
                value={filters.hane}
                onChange={handleFilterChange('hane')}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    fontSize: '0.9rem',
                  }
                }}
              >
                <MenuItem value="">Tüm Hane Aralıkları</MenuItem>
                {uniqueHaneRanges.map(range => (
                  <MenuItem key={range} value={range}>
                    {range.replace('-', ' - ')} hane
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 500, color: 'text.primary' }}>
              Bölge
            </Typography>
            <FormControl fullWidth>
              <Select
                value={filters.bolge}
                onChange={handleFilterChange('bolge')}
                displayEmpty
                sx={{
                  '& .MuiSelect-select': {
                    fontSize: '0.9rem',
                  }
                }}
              >
                <MenuItem value="">Tüm Bölgeler</MenuItem>
                {uniqueBolgeler.map(bolge => (
                  <MenuItem key={bolge} value={bolge}>
                    {bolge}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <TableContainer 
        component={Paper} 
        elevation={0}
        sx={{
          '.MuiTable-root': {
            '@media (max-width: 600px)': {
              '& thead': { display: 'none' },
              '& tbody tr': {
                display: 'block',
                borderBottom: '1px solid rgba(224, 224, 224, 1)',
                marginBottom: 2,
                '&:last-child': {
                  marginBottom: 0,
                },
              },
              '& td': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 2,
                '&:before': {
                  content: 'attr(data-label)',
                  fontWeight: 600,
                  marginRight: 2,
                },
              },
            },
          },
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600, width: 100 }}>Fotoğraf</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Mahalle Adı</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Nüfus</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Hane Sayısı</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Bölge</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredResults.length > 0 ? (
              filteredResults.map((row, index) => (
                <TableRow 
                  key={index}
                  onClick={() => handleRowClick(row)}
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { 
                      bgcolor: 'rgba(0, 0, 0, 0.04)',
                    },
                  }}
                >
                  <TableCell data-label="Fotoğraf">
                    <Box
                      sx={{
                        position: 'relative',
                        width: 80,
                        height: 80,
                        borderRadius: 1,
                        overflow: 'hidden',
                      }}
                    >
                      <Image
                        src={row.foto}
                        alt={`${row.mahalle} fotoğrafı`}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell data-label="Mahalle">{row.mahalle}</TableCell>
                  <TableCell data-label="Nüfus">{row.nufus.toLocaleString()}</TableCell>
                  <TableCell data-label="Hane">{row.hane.toLocaleString()}</TableCell>
                  <TableCell data-label="Bölge">{row.bolge}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">
                    Seçilen kriterlere uygun sonuç bulunamadı
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Popup Dialog */}
      <Dialog
        open={!!selectedRow}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedRow && (
          <>
            <DialogTitle sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              {selectedRow.mahalle}
              <IconButton onClick={handleCloseDialog}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 300,
                    borderRadius: 2,
                    overflow: 'hidden',
                    mb: 2,
                  }}
                >
                  <Image
                    src={selectedRow.foto}
                    alt={`${selectedRow.mahalle} fotoğrafı`}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nüfus
                    </Typography>
                    <Typography variant="h6">
                      {selectedRow.nufus.toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Hane Sayısı
                    </Typography>
                    <Typography variant="h6">
                      {selectedRow.hane.toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Bölge
                    </Typography>
                    <Typography variant="h6">
                      {selectedRow.bolge}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Açıklama
                    </Typography>
                    <Typography>
                      {selectedRow.aciklama || 'Açıklama bulunmuyor'}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
} 