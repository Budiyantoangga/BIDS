import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
  }

  try {
    // Buat koneksi ke database MySQL
    const db = await mysql.createConnection({
      host: 'localhost', // Ganti sesuai konfigurasi Anda
      user: 'root',
      password: '',
      database: 'bids',
    });

    // Hash password dengan SHA1
    const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');

    // Query untuk mencocokkan username dan password
    const [rows]: any = await db.execute(
      'SELECT * FROM bids_usr WHERE bids_usr_name = ? AND bids_usr_pass = ?',
      [username, hashedPassword]
    );

    // Tutup koneksi database
    await db.end();

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    // Login berhasil
    return NextResponse.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
