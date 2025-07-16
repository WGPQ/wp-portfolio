import Image from 'next/image'
import { CalendarIcon, MapPinIcon,LinkIcon, MapIcon } from "@heroicons/react/24/outline";

const page = () => {
  return (
     <div className="min-h-scree text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700">
              <Image
                src="/images/me.jpeg"
                alt="Selene Yu"
                width={128}
                height={128}
                className="w-full h-full object-cover"
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
            <p className="text-xl text-slate-400 mb-6">Software Engineer</p>

            {/* Language Toggle */}
            <div className="flex gap-2 mb-6">
              <button
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-1 text-sm"
              >
                Spanish
              </button>
              <button
                className="bg-transparent border-slate-600 text-slate-400 hover:bg-slate-800 rounded-full px-4 py-1 text-sm"
              >
                English
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/WGPQ/"
                target="_blank"
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <MapPinIcon className="w-4 h-4" />
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
                className="bg-transparent border-slate-600 text-white hover:bg-slate-800 rounded-full px-4 py-2 flex items-center gap-2"
              >
                <MapIcon className="w-4 h-4" />
                Email
              </a>
            </div>

            {/* Bio */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
              Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple,
              elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence
              of design and technology.
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-12">Work Experience</h2>

          <div className="border-l-2 border-slate-700 pl-8 relative">
            {/* Experience Item */}
            <div className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-10 top-2 w-4 h-4 bg-cyan-400 rounded-full"></div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">FLY</h3>
                  <p className="text-cyan-400 text-lg mb-4">Senior Design Engineer</p>
                </div>
                <span className="text-slate-400 text-lg">2022 - Present</span>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-lg leading-relaxed">
                    Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30%
                    faster load times.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
