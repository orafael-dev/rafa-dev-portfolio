import {TechBadge} from "@/app/components/tech-badge";
import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full">
          <Image
            src="/images/nonno.jpeg"
            alt="Nonno"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-700" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="#"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @NonnoApp
          </a>
          <h4 className="text-gray-300">Desenvolvedor Fullstack</h4>
          <span className="text-gray-500">jun/2023 - dez/2023 - 6 meses</span>
          <p className="text-gray-400">
            Desenvolvimento e manutenção de aplicações web e mobile, integração
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8 ">
          <TechBadge name="Tech" />
          <TechBadge name="Tech" />
          <TechBadge name="Tech" />
          <TechBadge name="Tech" />
          <TechBadge name="Tech" />
        </div>
      </div>
    </div>
  );
};
