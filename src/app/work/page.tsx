'use client';
import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "../projects";
import { useAppStore } from "@/store/appStore";
import { motion } from "framer-motion";

const WorkPage = () => {
  const FramerImage = motion(Image);
  const setProject = useAppStore((state) => state.setProject);

  const handleProjectClick = (project: Project) => {
    setProject(project);
  };
  return (
    <div className="min-h-screen p-8">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-white font-bold leading-tight mb-20">
          <span className="block text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl">
            Creativity Changes Everything ✨
          </span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const urlProject = project.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} className="bg-[#1e1d1c] rounded-3xl p-6">
                <div className="bg-gray-100 rounded-2xl mb-6 shadow-lg">
                  <FramerImage
                    src={project.image}
                    alt={project.title}
                    height={500}
                    width={600}
                    className="rounded-2xl object-scale-down w-full h-full aspect-auto"
                    // whileHover={{
                    //   scale: 1.1,
                    // }}
                    // whileTap={{ scale: 0.9 }}
                    // initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: 0.1 }}
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-white text-lg font-medium mb-2">{project.description}</p>
                    <p className="text-blue-400 text-base">{project.technologies.join(" | ")}</p>
                  </div>

                  <h2 className="text-white text-3xl font-bold leading-tight">{project.title}</h2>

                  <Link
                    href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleProjectClick(project)}
                    className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 rounded-xl"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkPage
