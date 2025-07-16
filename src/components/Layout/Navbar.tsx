import { SignalIcon, CubeIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import Link from "next/link";
import OClock from "../OClock";

interface NavItem {
  name: string;
  href: string;
}
const navItems: NavItem[] = [
  { name: 'Home', href: '/', },
  { name: 'About', href: '/about', },
  { name: 'Work', href: '/work', },
  // { name: 'Blog', href: '/blog', },
];
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#121212] flex justify-center h-17 w-full px-2 sm:px-4 lg:px-0 shadow-md">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <span className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 text-white whitespace-nowrap">
          <Logo />
        </span>

        <span className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 text-white whitespace-nowrap">
          <OClock />
        </span>

        <div className="hidden md:flex group relative h-12 w-48 hover:w-[400px] transition-all duration-300 ease-in-out bg-[#121212] border border-gray-700 rounded-full shadow-lg overflow-hidden items-center px-4">
          <div className="shrink-0">
            <CubeIcon className="h-7 w-9 text-gray-500 group-hover:text-white transition-colors duration-300" />
          </div>

          <ul className="absolute left-1/2 -translate-x-1/2 flex space-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white cursor-pointer hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </ul>

          <div className="ml-auto shrink-0">
            <SignalIcon className="h-7 w-9 text-gray-500 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

      </div>
    </div>
  );
};
export default Navbar;
