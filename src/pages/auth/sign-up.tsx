import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormType = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>()
  const navigate = useNavigate()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpFormType) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        email: data.email,
        managerName: data.managerName,
        phone: data.phone,
      })

      toast.success(`Estabelecimento cadastrado com sucesso!`, {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error(
        `Ops.. parece que houve um problema ao cadastrar o estabelecimento!`,
      )
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />
      <main className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="tracking-tighti text-2xl font-semibold">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento:</Label>
              <Input
                type="text"
                id="restaurantName"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome:</Label>
              <Input
                type="text"
                id="managerName"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular:</Label>
              <Input type="tel" id="phone" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                politicas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </main>
    </>
  )
}
