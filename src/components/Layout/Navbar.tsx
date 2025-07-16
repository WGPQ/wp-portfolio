import { SignalIcon, CubeIcon } from "@heroicons/react/24/outline";
import Clock from "../Clock";
import Logo from "../Logo";
import Link from "next/link";


interface NavItem {
  name: string;
  href: string;
}
const navItems: NavItem[] = [
  { name: 'Home', href: '/', },
  { name: 'About', href: '/about', },
  { name: 'Work', href: '/work', },
];

const Navbar = () => {
  return (
    <div className="relative flex justify-center mt-3 h-12 w-full max-w-7xl mx-auto px-4 lg:px-0">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white whitespace-nowrap">
        <Logo />
      </span>

      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white whitespace-nowrap">
        <Clock />
      </span>
      <div className="group relative h-12 w-48 hover:w-[400px] transition-all duration-300 ease-in-out bg-[#121212] border border-gray-700 rounded-full shadow-lg overflow-hidden flex items-center px-4">
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
  );
};

export default Navbar;
