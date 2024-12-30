'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { Box, Typography } from '@mui/material';

interface FileUploadProps {
  onDataLoaded: (data: any[]) => void;
}

export default function FileUpload({ onDataLoaded }: FileUploadProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    const fileType = file.name.split('.').pop()?.toLowerCase();
    if (!['xlsx', 'xls'].includes(fileType || '')) {
      setError('Lütfen sadece Excel dosyası yükleyin (.xlsx veya .xls)');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Read file
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          if (jsonData.length === 0) {
            setError('Dosya boş veya okunamıyor');
            return;
          }

          onDataLoaded(jsonData);
          setError(null);
        } catch (error) {
          setError('Dosya işlenirken bir hata oluştu');
          console.error('Excel processing error:', error);
        }
      };

      reader.onerror = () => {
        setError('Dosya okuma hatası');
      };

      reader.readAsArrayBuffer(file);

    } catch (error) {
      setError('Beklenmeyen bir hata oluştu');
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" paragraph>
        Nüfus verilerinizi içeren Excel dosyasını yükleyin
      </Typography>
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Excel dosyası yüklemek için tıklayın</span>
              </p>
              <p className="text-xs text-gray-500">.XLSX veya .XLS</p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              accept=".xlsx,.xls" 
              onChange={handleFileUpload}
              disabled={loading}
            />
          </label>
        </div>

        {loading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="mt-2 text-gray-600">Dosya yükleniyor...</p>
          </div>
        )}

        {error && (
          <div className="p-4 text-red-500 bg-red-50 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </Box>
  );
}