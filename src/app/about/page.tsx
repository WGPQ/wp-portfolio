import Image from 'next/image'
import { CodeBracketIcon, PaperAirplaneIcon, LinkIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { experiences } from '../experience';

const page = () => {
  return (
    <div className="min-h-scree bg-[#121212] text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700">
              <Image
                src="/images/me.jpeg"
                alt="Selene Yu"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </div>
            {/* Location Badge */}
            <div className="absolute -bottom-2 left-0 bg-slate-800 border border-slate-600 rounded-full px-3 py-1 flex items-center gap-2 text-sm">
              {/* <div className="w-4 h-3 bg-red-500 relative">
                <div className="absolute inset-0 bg-red-500"></div>
                <div className="absolute top-0 right-0 w-2 h-full bg-white"></div>
              </div> */}
              <span>Ecuador/Cayambe</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">William Puma</h1>
            <p className="text-xl text-slate-400 mb-6">Ingeniero en Sistemas Computacionales</p>

            {/* Language Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-1 text-sm"
              >
                Español
              </button>
              <button
                className="bg-transparent border-slate-600 text-slate-400 hover:bg-slate-800 rounded-full px-4 py-1 text-sm"
              >
                Inglés
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/WGPQ/"
                target="_blank"
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <CodeBracketIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/william-puma-dev/"
                target="_blank"
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <LinkIcon className="w-4 h-4" />
                LinkedIn
              </a>
                <a
                href="mailto:dwilgeo95@gmail.com?subject=Hola&body=Me%20gustaría%20contactarte"
                className="hidden md:flex bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 items-center gap-2"
                >
                <PaperAirplaneIcon className="w-4 h-4" />
                Correo
                </a>
              <a
                href="https://drive.google.com/file/d/1WzffkXzwb21jtetD1GpwyJp6iqS4Nfwn/view?usp=sharing"
                target="_blank"
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <DocumentIcon className="w-4 h-4" />
                <span className="block md:hidden">CV</span>
                <span className="hidden md:block">Hoja de vida</span>
              </a>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              William es un Ingeniero en Sistemas Computacionales que vive en Ecuador, especializado en el desarrollo de soluciones digitales. Apasionado por convertir ideas complejas en experiencias intuitivas, combina su experiencia en frontend, backend y diseño de interfaces para crear productos tecnológicos funcionales y atractivos.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-12">Experiencia laboral</h2>

          <div className="border-l-2 border-slate-700 pl-8 relative">
            {/* Experience Item */}
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                    <p className="text-cyan-400 text-lg">{experience.position}</p>
                    <span className="text-slate-400 text-sm">{experience.duration} - {experience.location}</span>
                  </div>
                </div>
                <p className="text-slate-300 mb-2">{experience.description}</p>
                <ul className="list-disc list-inside space-y-1">
                  {experience.responsibilities.map((responsibility, rIndex) => (
                    <li key={rIndex} className="text-slate-300">{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div >
    </div >
  )
}

export default page
