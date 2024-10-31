import {Link} from "@/app/components/link";
import {TechBadge} from "@/app/components/tech-badge";
import Image from "next/image";
import {HiArrowNarrowRight} from "react-icons/hi";
import {MdWorkspacePremium} from "react-icons/md";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/project-wireframe.png"
          alt="Project Image"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] object-cover rounded-lg lg:min-h-full"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <MdWorkspacePremium
            width={20}
            height={20}
            className="text-emerald-700/70"
          />
          Projeto 1
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, est
          vitae alias libero asperiores quisquam quo consectetur molestiae
          voluptates! Dolorum sequi accusamus dignissimos consequuntur rerum
          nulla hic veniam nesciunt sed voluptatibus. Adipisci laboriosam unde
          molestiae. Voluptates eius modi sunt cum deserunt laborum tempora
          minus aperiam architecto possimus excepturi, dolorem rem.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="tech" />
          <TechBadge name="tech" />
          <TechBadge name="tech" />
          <TechBadge name="tech" />
          <TechBadge name="tech" />
          <TechBadge name="tech" />
        </div>

        {/* TO DO */}
        <Link href="#">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
