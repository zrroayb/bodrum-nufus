import { Box, Chip, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface SearchFiltersProps {
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const FILTER_OPTIONS = [
  { value: 'mahalle', label: 'Mahalle Adı' },
  { value: 'nufus', label: 'Nüfus' },
  { value: 'hane', label: 'Hane Sayısı' },
  { value: 'bolge', label: 'Bölge' },
];

export default function SearchFilters({ selectedFilters, onFilterChange }: SearchFiltersProps) {
  const handleFilterChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    onFilterChange(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="filter-label">Arama Kriterleri</InputLabel>
        <Select
          labelId="filter-label"
          multiple
          value={selectedFilters}
          onChange={handleFilterChange}
          renderValue={(selected) => (
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={FILTER_OPTIONS.find(option => option.value === value)?.label}
                  sx={{
                    backgroundColor: 'primary.light',
                    color: 'white',
                    '& .MuiChip-deleteIcon': {
                      color: 'white',
                    },
                  }}
                />
              ))}
            </Stack>
          )}
          sx={{ minHeight: 56 }}
        >
          {FILTER_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
} 