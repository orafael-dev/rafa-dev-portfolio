import {HiArrowNarrowRight} from "react-icons/hi";
import {Button} from "../button";
import {SectionTitle} from "../section-title";

export const ContactForm = () => {
  return (
    <section className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle title="Vamos trabalhar juntos?" subtitle="contato" />

        <form className="mt-12 w-full flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
          <input
            type="textarea"
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            maxLength={500}
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
