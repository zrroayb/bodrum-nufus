import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const file = data.get('file') as File;
    
    // Process the Excel file
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    return NextResponse.json({
      message: "Nüfus verileri başarıyla yüklendi",
      data: jsonData
    });
  } catch (error) {
    return NextResponse.json({
      message: "Nüfus verilerini yüklerken bir hata oluştu",
      error: error
    }, { status: 500 });
  }
} 