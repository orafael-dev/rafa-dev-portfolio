import {Button} from "@/app/components/button";
import {TechBadge} from "@/app/components/tech-badge";
import Image from "next/image";
import {HiArrowNarrowRight} from "react-icons/hi";
import {TbBrandGithub, TbBrandInstagram, TbBrandLinkedin} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://github.com",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://github.com",
    icon: <TbBrandInstagram />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Rafael Almeida</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Desenvolvedor Fullstack com experiência em JavaScript, TypeScript,
            Node.js e Next.js. Tenho mais de um ano de atuação no
            desenvolvimento de software e estou concluindo o curso de Engenharia
            de Software. Gosto de criar soluçõe bem estruturadas, sempre focado
            em melhorar a experiência do usuário. Movido por desafios, estou em
            busca de projetos que me permitam mostrar o meu potencial.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({length: 7}).map((_, index) => (
              <TechBadge name="NextJS" key={index} />
            ))}
          </div>

          <div className="flex sm:items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
        className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          width={420}
          height={404}
          src="/images/wireframe.png"
          alt="Logo Image"
        />
      </div>
    </section>
  );
};
