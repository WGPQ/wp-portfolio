import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-white pt-4 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          <span>&copy; {new Date().getFullYear()}&nbsp;</span>
          Built<span className="text-2xl px-1"></span>
          by&nbsp;
          <Link href="/" className="underline hover:no-underline transition-all duration-200">
            William Puma
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
