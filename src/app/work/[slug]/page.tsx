'use client';
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { useAppStore } from "@/store/appStore";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const DevToIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.75 15.25h-3.5v-3.5h3.5v3.5zm-3.5-4.5h-3.5v-3.5h3.5v3.5zm-4.5 4.5h-3.5v-3.5h3.5v3.5zm0-4.5h-3.5v-3.5h3.5v3.5z" />
  </svg>
)

export default function WorkDetails() {
  const project = useAppStore((state) => state.project);

  const setProject = useAppStore((state) => state.setProject);

  const handleBackClick = () => {
    setTimeout(() => setProject(null), 300);
  };

  if (!project) return notFound();

  return (
    <div className="min-h-screen text-white py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="absolute top-4 left-4 md:top-20 md:left-20">
        <Link
          href="/work"
          onClick={handleBackClick}
          className="bg-zinc-900 text-white border border-white hover:bg-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="hidden md:inline">Back</span>
        </Link>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-16 text-center">{project?.title || "Unknown Project"}</h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl w-full">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {project?.slogan && project.slogan}
          </h2>
          {/* <p className="text-blue-400 text-lg font-medium">Content | Web Design | UX/UI | Development</p> */}
          <p className="text-lg leading-relaxed text-zinc-300">
            {project?.summary}
            {project?.importantPoints && project.importantPoints.length > 0 && (
              <>
                <p>Puntos importantes de {project.title} es:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {project.importantPoints.map((point, index) => (
                    <li key={index} className="text-zinc-300">
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight pt-4">
            El Ciclo de Vida y Desarrollo {project?.acronimon && `de ${project.acronimon}`}
          </h3>
          <p className="text-lg leading-relaxed text-zinc-300">
            {project?.aboutBuilding && project.aboutBuilding}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            {project.link && <Link
              href={project?.link || "#"}
              target="_blank"
              className="bg-zinc-900 text-white border-white hover:bg-zinc-800 px-8 py-6 text-lg rounded-lg"
            >
              Visitar Demo
            </Link>}
            {/* <button
              className="bg-zinc-900 text-white border-white hover:bg-zinc-800 px-8 py-6 text-lg rounded-lg"
            >
              View Code
            </button>
            <button
              className="bg-zinc-900 text-white border-white hover:bg-zinc-800 w-16 h-16 rounded-lg"
            >
              <Link href="#" aria-label="GitHub">
                Github
                <Github className="w-8 h-8" />
              </Link>
            </button>
            <button
              className="bg-zinc-900 text-white border-white hover:bg-zinc-800 w-16 h-16 rounded-lg"
            >
              <Link href="#" aria-label="Dev.to">
                <DevToIcon className="w-8 h-8" />
              </Link>
            </button>*/}
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-2xl aspect-auto bg-white rounded-2xl  shadow-lg overflow-hidden">
            <Image
              src={project!.image}
              alt={project!.title}
              height={600}
              width={800}
              priority
              draggable={false}
              className="rounded-2xl object-scale-down w-full h-full aspect-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
