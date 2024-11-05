"use client";

import {HiArrowNarrowRight} from "react-icons/hi";
import {Button} from "../button";
import {SectionTitle} from "../section-title";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {handleSubmit, register} = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle title="Vamos trabalhar juntos?" subtitle="contato" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            {...register("email")}
          />
          <input
            type="textarea"
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            maxLength={500}
            {...register("message")}
          />

          <Button className="w-max mx-auto mt-6 shadow-button">
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
