import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  styled,
  Box,
} from '@mui/material';
import Image from 'next/image';
import { DataItem } from '../data/nufusData';
import DetailDialog from './DetailDialog';

interface SearchResultsProps {
  data: DataItem[];
  searchResults: DataItem[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 600,
  },
}));

export default function SearchResults({ data, searchResults }: SearchResultsProps) {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  if (data.length === 0) return null;

  const handleRowClick = (item: DataItem) => {
    setSelectedItem(item);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="search results">
          <TableHead>
            <TableRow>
              <StyledTableCell>Fotoğraf</StyledTableCell>
              <StyledTableCell>Mahalle</StyledTableCell>
              <StyledTableCell align="right">Nüfus</StyledTableCell>
              <StyledTableCell align="right">Hane</StyledTableCell>
              <StyledTableCell align="right">Yıl</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((row) => (
              <TableRow
                key={row.id}
                sx={{ 
                  '&:nth-of-type(odd)': { bgcolor: 'rgba(0, 0, 0, 0.02)' },
                  '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' },
                  cursor: 'pointer',
                }}
                onClick={() => handleRowClick(row)}
              >
                <TableCell>
                  <Box
                    sx={{
                      position: 'relative',
                      width: 60,
                      height: 60,
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={row.foto}
                      alt={row.mahalle}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                      sizes="60px"
                    />
                  </Box>
                </TableCell>
                <TableCell>{row.mahalle}</TableCell>
                <TableCell align="right">{row.nufus.toLocaleString()}</TableCell>
                <TableCell align="right">{row.hane.toLocaleString()}</TableCell>
                <TableCell align="right">{row.yil}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedItem && (
        <DetailDialog
          open={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          data={selectedItem}
        />
      )}
    </>
  );
} 