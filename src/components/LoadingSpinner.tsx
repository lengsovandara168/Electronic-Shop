import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-16 h-16 border-4 border-purple-200 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner ring */}
        <motion.div
          className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-600 border-r-blue-600 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
