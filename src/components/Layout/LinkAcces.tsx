'use client';
import { motion } from "framer-motion";
import { SignalIcon, GiftIcon } from "@heroicons/react/24/outline";

const LinkAcces = () => {
  return (
    <nav>
      <div className="flex items-center space-x-4">
        <motion.a
          href="https://medium.com/@travis.lord"
          className="p-2 rounded-full border text-gray-500 group-hover:text-white hover:border-white transition-colors"
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 * 0.1 }}
        >
          <GiftIcon className="w-5 h-5 text-white" />
          <span className="sr-only">Medium</span>
        </motion.a>
      </div>
    </nav>
  )
}

export default LinkAcces
