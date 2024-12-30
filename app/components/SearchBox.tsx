import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBox({ searchTerm, onSearchChange }: SearchBoxProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Mahalle adı veya nüfus bilgisi ile arayın..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
      />
    </Box>
  );
} 