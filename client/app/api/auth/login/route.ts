import { createSession } from '@/lib/session';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  console.log('Login body:', body);

  const res = await fetch('http://localhost:3333/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ message: 'Dados Inválidos' }, { status: 401 });
  }

  const { user } = await res.json();

  await createSession(user.id, user.email, user.role);

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
}
