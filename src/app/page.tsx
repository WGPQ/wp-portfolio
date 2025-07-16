import Image from "next/image"

const page = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-1 lg:order-1 w-full">
            <Image
              src="/main_image.jpg"
              alt="Cedric standing by the beach wearing glasses and a dark jacket"
              width={600}
              height={600}
              className="rounded-lg w-full max-w-[250px] sm:max-w-[300px] md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
              priority
              draggable={false}
            />
          </div>
          <div className="order-2 lg:order-2 space-y-8 w-full">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Hey, I'm William</h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-400">
                I Build Interactive and Modern Web Experiences.
              </h2>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl text-justify">
              I'm a front-end developer passionate about building dynamic and user-friendly web experiences.
              With a sharp eye for design and a solid foundation in both front-end and back-end technologies,
              I've had the opportunity to collaborate with U.S.-based companies on innovative digital projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
