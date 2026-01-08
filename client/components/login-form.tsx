'use client';
import { zodResolver } from '@hookform/resolvers/zod';

import { Eye, EyeClosed } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

const loginFormSchema = z.object({
  email: z.email('Email inválido'),
  password: z.string().min(6, { message: 'A palavra-passe é muito curta' }),
});
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get('redirect') ?? '/';

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      form.setError('root', {
        message: 'Dados inválidos. Por favor, tente novamente.',
      });
      return;
    }

    if (res.ok) {
      router.replace(redirect);
    }
  }
  return (
    <Card className="mx-auto mb-7.5 flex min-h-86 w-75 items-center p-7.5">
      <h1 className="text-2xl font-bold">Iniciar Sessão</h1>

      <CardContent className="w-full p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-3.75"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="h-8.75 w-full rounded-[10px] border border-[#D9D9D9] bg-white px-3.75 py-3.25 text-xs placeholder:text-[#979899]"
                      placeholder="exemplo@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-full flex-col gap-1.25">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Palavra-Passe</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          className="h-8.75 w-full rounded-[10px] border border-[#D9D9D9] bg-white px-3.75 py-3.25 text-xs placeholder:text-[#979899]"
                          placeholder="Insira a sua palavra-passe"
                          {...field}
                        />
                        {showPassword ? (
                          <EyeClosed
                            size={15}
                            className="absolute top-2.5 right-5"
                            onClick={handleShowPassword}
                          />
                        ) : (
                          <Eye
                            size={15}
                            className="absolute top-2.5 right-5"
                            onClick={handleShowPassword}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="w-full flex-1 text-end text-sm">
                Esqueceu-se da sua senha?
              </span>
            </div>

            {form.formState.errors.root && (
              <p className="text-sm text-red-500">
                {form.formState.errors.root.message}
              </p>
            )}

            <Button
              type="submit"
              className="h-8.75 min-w-full cursor-pointer rounded-[10px] border border-black bg-white font-bold text-black"
              variant={'ghost'}
            >
              Entrar
            </Button>
            <p className="text-sm">
              Não tem conta?{' '}
              <Link href="register" className="text-primary font-bold">
                Registe-se
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
