import { cookies } from 'next/headers';
import 'server-only';
import { decrypt } from './session';

type User = {
  id: string;
  email?: string;
  role?: string;
};

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get('session')?.value;

  if (!session) return null;

  const payload = await decrypt(session);

  if (!payload?.userId) return null;

  return {
    id: payload.userId as string,
    email: payload.email as string | undefined,
    role: payload.role as string | undefined,
  };
}
