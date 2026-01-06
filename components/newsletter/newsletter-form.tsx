'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const formSchema = z.object({
  username: z.string().min(2, { message: 'Nome é muito curto' }).max(50),
  email: z.email('Email inválido'),
  terms: z
    .boolean()
    .refine((val) => val === true, { message: 'Deve aceitar os termos' }),
});

export default function NewsletterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(values.email + ' ' + values.username);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-3.75 w-83.75 space-y-1.25"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-10 rounded-[10px] border border-[#D9D9D9] bg-white px-3.75 py-3.25 text-xs placeholder:text-[#979899]"
                  placeholder="Digite o seu nome completo"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between gap-1.25">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    className="h-10 rounded-[10px] border border-[#D9D9D9] bg-white px-3.75 py-3.25 text-xs placeholder:text-[#979899]"
                    placeholder="Digite o seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="h-10 w-10">
            <ArrowRight size={15} />
          </Button>
        </div>

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col items-start gap-2">
              <div className="flex flex-row items-center gap-2">
                <FormControl className="">
                  <Input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    className="h-[14.62px] max-w-[14.62px] rounded-[2px] border border-[#D9D9D9] bg-white"
                  />
                </FormControl>
                <span className="text-[10px] leading-3.5 font-normal text-[#5A5A5A]">
                  Utilizamos cookies para personalizar o conteúdo e melhorar a
                  sua experiência no site de forma segura. Ao continuar a
                  navegar, estará a concordar com a nossa Política de
                  Privacidade
                </span>
              </div>
              <FormMessage className="" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
