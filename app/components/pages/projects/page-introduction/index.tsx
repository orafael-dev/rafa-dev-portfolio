import {Link} from "@/app/components/link";
import {SectionTitle} from "@/app/components/section-title";
import {HiArrowNarrowLeft} from "react-icons/hi";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        className="text-center items-center [&>h3]:text-4xl"
        subtitle="projetos"
        title="Meus Projetos"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Seleção com alguns de meus projetos principais que desenvolvi.
        </p>
        <Link href={"/"}>
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
};
