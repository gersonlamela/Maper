// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:3333/api/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json(
      { message: 'Erro ao ir buscar produtos' },
      { status: res.status },
    );
  }

  const { data } = await res.json();

  return NextResponse.json({ data });
}
