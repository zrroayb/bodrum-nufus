'use client';

import dynamic from 'next/dynamic';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Column {
  id: string;
  label: string;
  format?: (value: any) => string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
}

const DataTable = ({ columns, data, onEdit, onDelete }: DataTableProps) => {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell align="right">İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {column.format ? column.format(row[column.id]) : row[column.id]}
                </TableCell>
              ))}
              <TableCell align="right">
                <Button
                  startIcon={<EditIcon />}
                  onClick={() => onEdit(row)}
                  sx={{ mr: 1 }}
                >
                  Düzenle
                </Button>
                <Button
                  startIcon={<DeleteIcon />}
                  color="error"
                  onClick={() => onDelete(row.id)}
                >
                  Sil
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default dynamic(() => Promise.resolve(DataTable), {
  ssr: false
}); 