import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative w-16 h-12 sm:w-20 sm:h-14">
      <Image
        src="/logo-w.svg"
        fill
        className="object-contain"
        alt="William Puma"
        priority
        draggable={false}
      />
    </div>
  )
}

export default Logo
